 const typePhotos = {
  rockruff : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png',
  lycanroc : 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/745_f2.png',
  bladeAegislash : 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681_f2.png',
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
    hp: 100,
    atk: 134,
    def: 110,
    spatk: 95,
    spdef: 100,
    spd: 61,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png',
    name: 'Tyranitar'
  },
  larvitar: {
    hp: 50,
    atk: 64,
    def: 50,
    spatk: 45,
    spdef: 50,
    spd: 41,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/246.png',
    name: 'Larvitar'
  },
  pupitar: {
    hp: 70,
    atk: 84,
    def: 70,
    spatk: 65,
    spdef: 70,
    spd: 51,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/247.png',
    name: 'Pupitar'
  },
  megaTyranitar: {
    hp: 100,
    atk: 164,
    def: 150,
    spatk: 95,
    spdef: 120,
    spd: 71,
    photo: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/47593c73cdf2c006688384c736711a526f5ea267.png',
    name: 'Mega Tyranitar'
  },
  pichu: {
    hp: 20,
    atk: 40,
    def: 15,
    spatk: 35,
    spdef: 35,
    spd: 60,
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png',
    name: 'Pichu'
  },
  pikachu: {
    hp: 35,
    atk: 55,
    def: 40,
    spatk: 50,
    spdef: 50,
    spd: 90,
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    name: 'Pikachu'
  },
  raichu: {
    hp: 60,
    atk: 90,
    def: 55,
    spatk: 90,
    spdef: 80,
    spd: 110,
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
    name: 'Raichu'
  },
  lycanroc: {
    hp: 85,
    atk: 115,
    def: 75,
    spatk: 55,
    spdef: 75,
    spd: 82,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/745_f2.png',
    name: 'Lycanroc'
  },
  rockruff: {
    hp: 45,
    atk: 65,
    def: 40,
    spatk: 30,
    spdef: 40,
    spd: 60,
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png',
    name: 'Rockruff'
  },
  riolu: {
    hp: 40,
    atk: 70,
    def: 40,
    spatk: 35,
    spdef: 40,
    spd: 60,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/447.png',
    name: 'Riolu'
  },
  lucario: {
    hp: 70,
    atk: 110,
    def: 70,
    spatk: 115,
    spdef: 70,
    spd: 90,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/448.png',
    name: 'Lucario'
  },
  megaLucario: {
    hp: 70,
    atk: 145,
    def: 88,
    spatk: 140,
    spdef: 70,
    spd: 112,
    photo: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png',
    name: 'Mega Lucario'
  },
  greninja: {
    hp: 72,
    atk: 95,
    def: 67,
    spatk: 103,
    spdef: 71,
    spd: 122,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658.png',
    name: 'Greninja'
  },
  froakie: {
    hp: 41,
    atk: 56,
    def: 40,
    spatk: 62,
    spdef: 44,
    spd: 71,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/656.png',
    name: 'Froakie'
  },
  ashGreninja: {
    hp: 72,
    atk: 145,
    def: 67,
    spatk: 153,
    spdef: 71,
    spd: 132,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658_f2.png',
    name: 'Ash-Greninja'
  },
  frogadier: {
    hp: 54,
    atk: 63,
    def: 52,
    spatk: 83,
    spdef: 56,
    spd: 97,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/657.png',
    name: 'Frogadier'
  },
  gible: {
    hp: 58,
    atk: 70,
    def: 45,
    spatk: 40,
    spdef: 45,
    spd: 42,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/443.png',
    name: 'Gible'
  },
  gabite: {
    hp: 68,
    atk: 90,
    def: 65,
    spatk: 50,
    spdef: 55,
    spd: 82,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/444.png',
    name: 'Gabite'
  },
  garchomp: {
    hp: 108,
    atk: 130,
    def: 95,
    spatk: 80,
    spdef: 85,
    spd: 102,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445.png',
    name: 'Garchomp'
  },
  megaGarchomp: {
    hp: 108,
    atk: 170,
    def: 115,
    spatk: 120,
    spdef: 95,
    spd: 92,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445_f2.png',
    name: 'Mega Garchomp'
  },
  charmander: {
    hp: 39,
    atk: 52,
    def: 43,
    spatk: 60,
    spdef: 50,
    spd: 65,
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    name: 'Charmander'
  },
  charmeleon: {
    hp: 58,
    atk: 64,
    def: 58,
    spatk: 80,
    spdef: 65,
    spd: 80,
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    name: 'Charmeleon'
  },
  charizard: {
    hp: 78,
    atk: 84,
    def: 78,
    spatk: 109,
    spdef: 85,
    spd: 100,
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    name: 'Charizard'
  },
  bladeAegislash: {
    hp: 60,
    atk: 140,
    def: 50,
    spatk: 140,
    spdef: 50,
    spd: 60,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681_f2.png',
    name: 'Aegislash (Blade Forme)'
  },
  doublade: {
    hp: 59,
    atk: 110,
    def: 150,
    spatk: 45,
    spdef: 49,
    spd: 35,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full680.png',
    name: 'Doublade'
  },
  honedge: {
    hp: 45,
    atk: 80,
    def: 100,
    spatk: 35,
    spdef: 37,
    spd: 28,
    photo: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/679.png',
    name: 'Honedge'
  },
  shieldAegislash: {
    hp: 60,
    atk: 50,
    def: 140,
    spatk: 50,
    spdef: 140,
    spd: 60,
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png',
    name: 'Aegislash (Shield Forme)'
  }
};
export  {pokeStats, typePhotos};