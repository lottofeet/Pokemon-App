let pokemonList = [{
	name: 'Caterpie ', 
	height: 4, 
	types: ['bug', 'electric']
  },
  {
	name: 'Sandslash ',
	height: 1,
	type: ['ground']
  },
  {
	name: 'Meowth ',
	height: 3,
	type:['normal']
  },
]

for (let i = 0; i < pokemonList.length; i++) {
	if (pokemonList[i].height >= 4 ) {
		document.write(`${pokemonList[i].name}  height:  ${pokemonList[i].height} - Wow! That's big! <br>`);
	} else {
		document.write(`${pokemonList[i].name}  height:  ${pokemonList[i].height}  <br>`);
	}

}	

// for (let i = 0; i < pokemonList.length; i++) {
//   document.write(`${pokemonList[i].name}  height:  ${pokemonList[i].height}`);

//   if (pokemonList[i].height > 0.9) {
//     document.write("wow thats big");
//   } else if (pokemonList[i].height < 0.5) {
//     document.write("wow thats small");
//   } else {
//     document.write("wow, what an unusual size");
//   }
//   document.write("<br/>");
// }`