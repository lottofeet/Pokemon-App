let pokemonRepository = (function(){ // IIFE
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


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

function getAll(){
	return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list'); // variable assigned to <ul> in index.html
  let listItem = document.createElement('li'); // variable creating a list item
  let button = document.createElement('button'); // variable creating a button 

  button.innerText = pokemon.name; // assigning the button text to be the pokemon name
  button.classList.add('button-class'); // adding class for css 
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
	button.addEventListener('click', function(){
		showDetails(pokemon);
	});

}

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

function showDetails(pokemon){
	loadDetails(pokemon).then(function () {
		console.log(pokemon);
	});
}

return{
	getAll: getAll,
	add: add,
	addListItem: addListItem,
	loadList: loadList,
	loadDetails: loadDetails,
	showDetails: showDetails
};

})();


// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
	//^^ now the data is loaded
	pokemonRepository.getAll().forEach(function(pokemon){
		pokemonRepository.addListItem(pokemon);
	});
})




// Original forEach loop hidden for exercise
// pokemonRepository.getAll().forEach(function(pokemon) { // forEach loop
// 	pokemonRepository.addListItem(pokemon);
// });


