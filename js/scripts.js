let pokemonRepository = (function(){ // IIFE
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
	
	// Returns a pokemonList
	function getAll(){
		return pokemonList;
	}
	
	// Adds new objects to the list from the outside
	function add(pokemon){
		if (
			typeof pokemon === "object" &&
			'name' in pokemon && 
			'detailsUrl' in pokemon
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
	  let pokemonList = document.querySelector('.list-group'); // variable assigned to <ul> in index.html
	  let listItem = document.createElement('li'); // variable creating a list item
	  listItem.classList.add('list-group-item'); // adds a class to each list item
	  
	  let button = document.createElement('button'); // variable creating a button 
	  button.innerText = pokemon.name; // assigning the button text to be the pokemon name
	  // adds bootstrap class 
	  button.classList.add('btn');
	  button.classList.add('btn-primary');
	  button.classList.add('btn-lg');
	  button.setAttribute('data-target', '#exampleModal');
	  button.setAttribute('data-toggle', 'modal');

	  listItem.appendChild(button);
	  pokemonList.appendChild(listItem);
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
					detailsUrl: item.url,
				};
				add(pokemon);
			});
		}).catch(function (e) {
			console.error(e);
		});
	}

	// Fetch pokemon details from API list
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function (response){
			return response.json();
		}).then(function (details) {
			// below code adds the details to the item
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			// calls the types array
			item.types = [];
			for ( let i = 0; i < details.types.length; i++) {
				item.types.push(details.types[i].type.name);
			} 
		}).catch(function (e) {
			console.error(e);
		});
	}

	// Searchbar:

	function search() {
		let searchInput = document.querySelector('#search-bar');

		
	}

	// displays modal
	function showModal(pokemon) {

		let modalBody = $('.modal-body');
		let modalTitle = $('.modal-title');
		let modalHeader = $('.modal-header');

		// Clears existing modal content
		modalTitle.empty();
		modalBody.empty();

		// // creates title <h1> element
		let nameElement = $('<h1>' + pokemon.name + '</h1>');

		let imageElement = $('<img class="modal-img" style="width:50%">');
		imageElement.attr('src', pokemon.imageUrl);

		let typeElement = $('<p>' + pokemon.types + '</p>');
		let heightElement = $('<p>' + pokemon.height + '</p>');

		modalTitle.append(nameElement);
		modalBody.append(imageElement);
		modalBody.append(typeElement);
		modalBody.append(heightElement);
		

	}



	//  Dispays pokemons
	function showDetails(pokemon){
		pokemonRepository.loadDetails(pokemon).then(function () {
			showModal(pokemon);
			console.log(pokemon);
		});
	}





	// return
	return{
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
	};

})();



pokemonRepository.loadList().then(function() {
	//^^ now the data is loaded
	pokemonRepository.getAll().forEach(function(pokemon){
		pokemonRepository.addListItem(pokemon);
	});
});

