let pokemonList = [{
	name: 'Caterpie ', 
	height: 0.3, 
	types: ['bug', 'electric']
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
]



for (let i = 0; i < pokemonList.length; i++) {
	if (pokemonList[i].height > 0.9 ) {
		document.write(`${pokemonList[i].name}  height:  ${pokemonList[i].height} - Wow! That's big! <br>`);
	} else {
		document.write(`${pokemonList[i].name}  height:  ${pokemonList[i].height}  <br>`);
	}
}	
