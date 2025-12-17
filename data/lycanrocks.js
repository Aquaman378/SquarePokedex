const typePhotos = {
  rockruff: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png',
  lycanroc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/745_f2.png',
  bladeAegislash: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681_f2.png',
  doublade: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/680.png',
  honedge: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/679.png',
  shieldAegislash: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png',
  charmander: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  charizard: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  charmeleon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  gabite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/444.png',
  garchomp: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445.png',
  gible: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/443.png',
  megaGarchomp: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445_f2.png',
  ashGreninja: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658_f2.png',
  froakie: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/656.png',
  frogadier: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/657.png',
  greninja: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658.png',
  lucario: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/448.png',
  megaLucario: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png',
  riolu: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/447.png',
  pichu: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png',
  pikachu: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  raichu: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
  larvitar: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/246.png',
  megaTyranitar: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/47593c73cdf2c006688384c736711a526f5ea267.png',
  pupitar: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/247.png',
  tyranitar: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png'
}                                                                                                                                                        //rant incoming                                                                                     Why put the name of the pokemon in the file when you know the name of the pokemon you want the stats from? It quite litterally makes no sense and adding the names is a complete waste of time that could be better served elsewhere. Also, my code isn't wrong or errored, it functions exactly like it is supposed to. I know I didn't mess it up because I submitted it into github. Jalon was the one who mostlikely messed up because it's not in master. I know it wasn't me because I FINISHED EVERYTHING WEDNESDAY LASAT WEEK. I'm done, and that's it. Any work past this point in this file is a complete and total waste of time.
const pokeStats = {
  tyranitar: { 
    hp: 373,
    atk: 403,
    def: 270,
    spatk: 226,
    spdef: 250,
    spd: 114,
    name: 'Tyranitar',
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png',

  },
  megaTyranitar: { 
    hp: 373,
    atk: 469,
    def: 350,
    spatk: 226,
    spdef: 290,
    spd: 132,
    name: 'Mega Tyranitar',
    photo: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/47593c73cdf2c006688384c736711a526f5ea267.png',

  },
  raichu: { 
    hp: 201,
    atk: 248,
    def: 129,
    spatk: 248,
    spdef: 214,
    spd: 350,
    name: 'Raichu',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',

  },
  lycanroc: { 
    hp: 311,
    atk: 361,
    def: 184,
    spatk: 132,
    spdef: 184,
    spd: 263,
    name: 'Lycanroc',
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/745_f2.png',

  },
  lucario: { 
    hp: 281,
    atk: 288,
    def: 174,
    spatk: 298,
    spdef: 156,
    spd: 306,
    name: 'Lucario',
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/448.png',

  },
  megaLucario: { 
    hp: 281,
    atk: 358,
    def: 210,
    spatk: 348,
    spdef: 156,
    spd: 355,
    name: 'Mega Lucario',
    photo: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png',

  },
  greninja: { 
    hp: 285,
    atk: 258,
    def: 168,
    spatk: 274,
    spdef: 158,
    spd: 377,
    name: 'Greninja',
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658.png',

  },
  ashGreninja: {
    hp: 285,
    atk: 358,
    def: 168,
    spatk: 374,
    spdef: 158,
    spd: 399,
    name: 'Ash-Greninja',
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658_f2.png',

  },
  garchomp: {
    hp: 358,
    atk: 359,
    def: 201,
    spatk: 196,
    spdef: 204,
    spd: 333,
    name: 'Garchomp',
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445.png',

  },
  megaGarchomp: {
    hp: 358,
    atk: 439,
    def: 237,
    spatk: 276,
    spdef: 224,
    spd: 311,
    name: 'Mega Garchomp',
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445_f2.png',

  },
  charizard: {
    hp: 298,
    atk: 267,
    def: 171,
    spatk: 279,
    spdef: 204,
    spd: 299,
    name: 'Charizard',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',

  },
  bladeAegislash: {
    hp: 261,
    atk: 416,
    def: 168,
    spatk: 316,
    spdef: 168,
    spd: 112,
    name: 'Aegislash (Blade Forme)',
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681_f2.png',

  },
  shieldAegislash: {
    hp: 261,
    atk: 218,
    def: 348,
    spatk: 136,
    spdef: 348,
    spd: 112,
    name: 'Aegislash (Shield Forme)',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png',

  }
};

export const pokeMoves = {
  // --- Tyranitar Line ---
  larvitar: [
    { name: 'Bite', type: 'Dark', power: 60, category: 'Physical' },
    { name: 'Rock Slide', type: 'Rock', power: 75, category: 'Physical' },
    { name: 'Stomp', type: 'Normal', power: 65, category: 'Physical' },
    { name: 'Mud-Slap', type: 'Ground', power: 20, category: 'Special' }
  ],
  pupitar: [
    { name: 'Crunch', type: 'Dark', power: 80, category: 'Physical' },
    { name: 'Rock Tomb', type: 'Rock', power: 60, category: 'Physical' },
    { name: 'Iron Defense', type: 'Steel', power: 0, category: 'Status' },
    { name: 'Thrash', type: 'Normal', power: 120, category: 'Physical' }
  ],
  tyranitar: [
    { name: 'Stone Edge', type: 'Rock', power: 100, category: 'Physical' },
    { name: 'Crunch', type: 'Dark', power: 80, category: 'Physical' },
    { name: 'Earthquake', type: 'Ground', power: 100, category: 'Physical' },
    { name: 'Giga Impact', type: 'Normal', power: 150, category: 'Physical' }
  ],
  megaTyranitar: [
    { name: 'Stone Edge', type: 'Rock', power: 100, category: 'Physical' },
    { name: 'Crunch', type: 'Dark', power: 80, category: 'Physical' },
    { name: 'Hyper Beam', type: 'Normal', power: 150, category: 'Special' },
    { name: 'Dark Pulse', type: 'Dark', power: 80, category: 'Special' }
  ],

  // --- Pikachu Line ---
  pichu: [
    { name: 'Thunder Shock', type: 'Electric', power: 40, category: 'Special' },
    { name: 'Sweet Kiss', type: 'Fairy', power: 0, category: 'Status' },
    { name: 'Tail Whip', type: 'Normal', power: 0, category: 'Status' },
    { name: 'Nuzzle', type: 'Electric', power: 20, category: 'Physical' }
  ],
  pikachu: [
    { name: 'Thunderbolt', type: 'Electric', power: 90, category: 'Special' },
    { name: 'Quick Attack', type: 'Normal', power: 40, category: 'Physical' },
    { name: 'Iron Tail', type: 'Steel', power: 100, category: 'Physical' },
    { name: 'Electro Ball', type: 'Electric', power: 60, category: 'Special' }
  ],
  raichu: [
    { name: 'Thunder', type: 'Electric', power: 110, category: 'Special' },
    { name: 'Spark', type: 'Electric', power: 65, category: 'Physical' },
    { name: 'Extreme Speed', type: 'Normal', power: 80, category: 'Physical' },
    { name: 'Thunder Punch', type: 'Electric', power: 75, category: 'Physical' }
  ],

  // --- Lycanroc Line ---
  rockruff: [
    { name: 'Tackle', type: 'Normal', power: 40, category: 'Physical' },
    { name: 'Rock Throw', type: 'Rock', power: 50, category: 'Physical' },
    { name: 'Bite', type: 'Dark', power: 60, category: 'Physical' },
    { name: 'Sand Attack', type: 'Ground', power: 0, category: 'Status' }
  ],
  lycanroc: [
    { name: 'Accelerock', type: 'Rock', power: 40, category: 'Physical' },
    { name: 'Crunch', type: 'Dark', power: 80, category: 'Physical' },
    { name: 'Stone Edge', type: 'Rock', power: 100, category: 'Physical' },
    { name: 'Rock Climb', type: 'Normal', power: 90, category: 'Physical' }
  ],

  // --- Lucario Line ---
  riolu: [
    { name: 'Force Palm', type: 'Fighting', power: 60, category: 'Physical' },
    { name: 'Quick Attack', type: 'Normal', power: 40, category: 'Physical' },
    { name: 'Vacuum Wave', type: 'Fighting', power: 40, category: 'Special' },
    { name: 'Reversal', type: 'Fighting', power: 20, category: 'Physical' }
  ],
  lucario: [
    { name: 'Aura Sphere', type: 'Fighting', power: 80, category: 'Special' },
    { name: 'Close Combat', type: 'Fighting', power: 120, category: 'Physical' },
    { name: 'Flash Cannon', type: 'Steel', power: 80, category: 'Special' },
    { name: 'Extreme Speed', type: 'Normal', power: 80, category: 'Physical' }
  ],
  megaLucario: [
    { name: 'Aura Sphere', type: 'Fighting', power: 80, category: 'Special' },
    { name: 'Meteor Mash', type: 'Steel', power: 90, category: 'Physical' },
    { name: 'Bone Rush', type: 'Ground', power: 25, category: 'Physical' },
    { name: 'Dragon Pulse', type: 'Dragon', power: 85, category: 'Special' }
  ],

  // --- Greninja Line ---
  froakie: [
    { name: 'Pound', type: 'Normal', power: 40, category: 'Physical' },
    { name: 'Water Pulse', type: 'Water', power: 60, category: 'Special' },
    { name: 'Bubble', type: 'Water', power: 40, category: 'Special' },
    { name: 'Quick Attack', type: 'Normal', power: 40, category: 'Physical' }
  ],
  frogadier: [
    { name: 'Water Pulse', type: 'Water', power: 60, category: 'Special' },
    { name: 'Aerial Ace', type: 'Flying', power: 60, category: 'Physical' },
    { name: 'Lick', type: 'Ghost', power: 30, category: 'Physical' },
    { name: 'Aqua Jet', type: 'Water', power: 40, category: 'Physical' }
  ],
  greninja: [
    { name: 'Water Shuriken', type: 'Water', power: 15, category: 'Special' },
    { name: 'Night Slash', type: 'Dark', power: 70, category: 'Physical' },
    { name: 'Hydro Pump', type: 'Water', power: 110, category: 'Special' },
    { name: 'Extrasensory', type: 'Psychic', power: 80, category: 'Special' }
  ],
  ashGreninja: [
    { name: 'Water Shuriken', type: 'Water', power: 20, category: 'Special' },
    { name: 'Night Slash', type: 'Dark', power: 70, category: 'Physical' },
    { name: 'Aerial Ace', type: 'Flying', power: 60, category: 'Physical' },
    { name: 'Hydro Cannon', type: 'Water', power: 150, category: 'Special' }
  ],

  // --- Garchomp Line ---
  gible: [
    { name: 'Tackle', type: 'Normal', power: 40, category: 'Physical' },
    { name: 'Sand Tomb', type: 'Ground', power: 35, category: 'Physical' },
    { name: 'Dragon Rage', type: 'Dragon', power: 40, category: 'Special' },
    { name: 'Bulldoze', type: 'Ground', power: 60, category: 'Physical' }
  ],
  gabite: [
    { name: 'Dragon Claw', type: 'Dragon', power: 80, category: 'Physical' },
    { name: 'Sand Tomb', type: 'Ground', power: 35, category: 'Physical' },
    { name: 'Slash', type: 'Normal', power: 70, category: 'Physical' },
    { name: 'Dual Chop', type: 'Dragon', power: 40, category: 'Physical' }
  ],
  garchomp: [
    { name: 'Dragon Claw', type: 'Dragon', power: 80, category: 'Physical' },
    { name: 'Earthquake', type: 'Ground', power: 100, category: 'Physical' },
    { name: 'Dragon Rush', type: 'Dragon', power: 100, category: 'Physical' },
    { name: 'Fire Blast', type: 'Fire', power: 110, category: 'Special' }
  ],
  megaGarchomp: [
    { name: 'Dragon Claw', type: 'Dragon', power: 80, category: 'Physical' },
    { name: 'Earthquake', type: 'Ground', power: 100, category: 'Physical' },
    { name: 'Stone Edge', type: 'Rock', power: 100, category: 'Physical' },
    { name: 'Draco Meteor', type: 'Dragon', power: 130, category: 'Special' }
  ],

  // --- Charizard Line ---
  charmander: [
    { name: 'Scratch', type: 'Normal', power: 40, category: 'Physical' },
    { name: 'Ember', type: 'Fire', power: 40, category: 'Special' },
    { name: 'Dragon Breath', type: 'Dragon', power: 60, category: 'Special' },
    { name: 'Fire Spin', type: 'Fire', power: 35, category: 'Special' }
  ],
  charmeleon: [
    { name: 'Flame Burst', type: 'Fire', power: 70, category: 'Special' },
    { name: 'Fire Fang', type: 'Fire', power: 65, category: 'Physical' },
    { name: 'Slash', type: 'Normal', power: 70, category: 'Physical' },
    { name: 'Dragon Rage', type: 'Dragon', power: 40, category: 'Special' }
  ],
  charizard: [
    { name: 'Flamethrower', type: 'Fire', power: 90, category: 'Special' },
    { name: 'Fly', type: 'Flying', power: 90, category: 'Physical' },
    { name: 'Dragon Claw', type: 'Dragon', power: 80, category: 'Physical' },
    { name: 'Heat Wave', type: 'Fire', power: 95, category: 'Special' }
  ],

  // --- Aegislash Line ---
  honedge: [
    { name: 'Tackle', type: 'Normal', power: 40, category: 'Physical' },
    { name: 'Shadow Sneak', type: 'Ghost', power: 40, category: 'Physical' },
    { name: 'Fury Cutter', type: 'Bug', power: 40, category: 'Physical' },
    { name: 'Aerial Ace', type: 'Flying', power: 60, category: 'Physical' }
  ],
  doublade: [
    { name: 'Iron Head', type: 'Steel', power: 80, category: 'Physical' },
    { name: 'Shadow Claw', type: 'Ghost', power: 70, category: 'Physical' },
    { name: 'Night Slash', type: 'Dark', power: 70, category: 'Physical' },
    { name: 'Sacred Sword', type: 'Fighting', power: 90, category: 'Physical' }
  ],
  shieldAegislash: [
    { name: 'King\'s Shield', type: 'Steel', power: 0, category: 'Status' },
    { name: 'Shadow Ball', type: 'Ghost', power: 80, category: 'Special' },
    { name: 'Flash Cannon', type: 'Steel', power: 80, category: 'Special' },
    { name: 'Gyro Ball', type: 'Steel', power: 50, category: 'Physical' }
  ],
  bladeAegislash: [
    { name: 'Sacred Sword', type: 'Fighting', power: 90, category: 'Physical' },
    { name: 'Shadow Claw', type: 'Ghost', power: 70, category: 'Physical' },
    { name: 'Iron Head', type: 'Steel', power: 80, category: 'Physical' },
    { name: 'Close Combat', type: 'Fighting', power: 120, category: 'Physical' }
  ],

  default: [
    { name: 'Tackle', type: 'Normal', power: 40, category: 'Physical' },
    { name: 'Struggle', type: 'Normal', power: 50, category: 'Physical' }
  ]
};

async function getMovesForPokemon(pokemonName) { //AI made this to use API to get actual moves for each pokemon
  try {
    // 1. Get the basic pokemon data (includes move list)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const data = await response.json();

    // 2. Take the first 4 moves for simplicity
    const movePromises = data.moves.slice(0, 4).map(async (moveData) => {
      const moveRes = await fetch(moveData.move.url);
      const m = await moveRes.json();

      const moveObj = {
        name: m.name.charAt(0).toUpperCase() + m.name.slice(1).replace('-', ' '),
        type: m.type.name.charAt(0).toUpperCase() + m.type.name.slice(1),
        power: m.power || 40, // Fallback power
        category: m.damage_class.name === 'physical' ? 'Physical' : 'Special'
      };
      return moveObj;
    });

    const moves = await Promise.all(movePromises);
    console.log(`Moves for ${pokemonName}:`, moves);
    return moves;
  } catch (error) {
    console.error("Error fetching moves:", error);
  }
}

export { pokeStats, typePhotos, getMovesForPokemon };