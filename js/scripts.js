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



pokemonRepository.getall()forEach(function() {
  document.write(pokemonRepository.getAll);
  document.write(`<br>`);
});


