let pokemonList = [{
	name: 'caterpie ', 
	height: 0.3, 
	types: ['bug', 'electric']
  },
  {
	name: 'sandslash ',
	height: 1,
	type: ['ground']
  },
  {
	name: 'meowth ',
	height: 0.4,
	type:['normal']
  },
]

for (let i = 0; i < pokemonList.length; i++) {
	document.write(`${pokemonList[i].name}  height:  ${pokemonList[i].height}<br>`);
	}	

if (pokemonList.height > 1 ) {
		console.log('wow thats big');
	} else if (pokemonList.height < 0.5) {
		console.log('wow thats small');
	} else {
		console.log('wow, what an unusual size');
	}
