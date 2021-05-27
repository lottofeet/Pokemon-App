let pokemonRepository = (function(){ // IIFE

let pokemonList = [
{
	name: 'Caterpie ', 
	height: 0.3, 
	type: ['bug', 'electric']
  },
  {
	name: 'Sandslash ',
	height: 1,
	type: ['ground']
  },
  {
	name: 'Meowth ',
	height: 0.4,
	type:['normal']
  },
];

function getAll(){
	return pokemonList;
}

function add(pokemon){
	pokemonList.push(pokemon);
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

function showDetails(pokemon){
	console.log(pokemon);
}

return{
	getAll: getAll,
	add: add,
	addListItem: addListItem,
	showDetails: showDetails
};

})();



pokemonRepository.getAll().forEach(function(pokemon) { // forEach loop
	pokemonRepository.addListItem(pokemon);
});


