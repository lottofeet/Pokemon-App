let pokemonRepository = (function(){

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

return{
	getAll: getAll,
	add: add
};

})();

// // forEach() Loop - task 1.5
// pokemonList.forEach(function(pokemon) {
//   document.write('Name: ' + pokemon.name +'Height: ' + pokemon.height + ' Type: ' + pokemon.type);
//   document.write(`<br>`);
// });


pokemonRepository.getall().forEach(function(pokemon) {
  document.write(pokemonRepository.getAll);
  document.write(`<br>`);
});


