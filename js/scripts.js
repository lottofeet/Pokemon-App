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

// forEach() Loop - task 1.5
pokemonList.forEach(function(pokemon) {
  document.write('Name: ' + pokemon.name +'Height: ' + pokemon.height + ' Type: ' + pokemon.type);
});

