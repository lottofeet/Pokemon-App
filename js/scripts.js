let pokemonRepository = (function(){ // IIFE
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
	let modalContainer = document.querySelector('#modal-container');


	function add(pokemon){
		if (
			typeof pokemon === "object" &&
			"name" in pokemon
			){
			pokemonList.push(pokemon);
		} else{
			console.log('pokemon is not correct');
		}
	} 

	// Returns a pokemonList
	function getAll(){
		return pokemonList;
	}
	
	//  pokemonList & PokemonItems
	function addListItem(pokemon){
	  let pokemonList = document.querySelector('.pokemon-list'); // variable assigned to <ul> in index.html
	  let listItem = document.createElement('li'); // variable creating a list item
	  pokemonList.appendChild(listItem);
	  
	  let button = document.createElement('button'); // variable creating a button 
	  button.innerText = pokemon.name; // assigning the button text to be the pokemon name
	  button.classList.add('button-class'); // adding class for css 
	  listItem.appendChild(button);
		button.addEventListener('click', function(){
			showDetails(pokemon);
		});

	}

	//  Fetch pokemon list from API
	function loadList() {
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then(function(json) {
			json.results.forEach(function(item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			});
		}).catch(function (e) {
			console.error(e);
		})
	}

	// Fetch pokemon details from API list
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function (response){
			return response.json();
		}).then(function (details) {
			// below code adds the details to the item
			item.imageUrl = details.sprites.front_detault;
			item.height = details.height;
			item.types = details.types;
		}).catch(function (e) {
			console.error(e);
		});
	}

	// displays modal
	function showModal(pokemon) {

		// Clears existing modal content
		modalContainer.innerHTML = '';

		let modal = document.createElement('div');
		modal.classList.add('modal');

		// Add the new modal Content
		let closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		closeButtonElement.innerText = 'Close';
		closeButtonElement.addEventListener('click', hideModal);

		// creates title <h1> element
		let titleElement = document.createElement('h1');
		titleElement.innerText = loadDetails;

		// creates <p> element
		let contentElement = document.createElement('p');
		contentElement.innerText = 'text';


		modal.appendChild(closeButtonElement);
		modal.appendChild(titleElement);
		modal.appendChild(contentElement);
		modalContainer.appendChild(modal);

		modalContainer.classList.add('is-visible');
	}

	// Hides Modal
	function hideModal() {
		modalContainer.classList.remove('is-visible');
	}

	//  Dispays pokemons
	function showDetails(pokemon){
		pokemonRepository.loadDetails(pokemon).then(function () {
			showModal(pokemon);
			console.log(pokemon);
		});
	}

		// close modal by clicking outside of window
		modalContainer.addEventListener('click', (e) => {
			let target = e.target;
			if (target === modalContainer) {
			hideModal();
			}
		});

		// escape-key exit
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
				hideModal();
			}
			});


	// return
	return{
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		showModal: showModal,
		hideModal: hideModal
	};

})();



pokemonRepository.loadList().then(function() {
	//^^ now the data is loaded
	pokemonRepository.getAll().forEach(function(pokemon){
		pokemonRepository.addListItem(pokemon);
	});
})

