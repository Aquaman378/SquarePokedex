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
}
const pokeStats={
  tyranitar :{
hp: 100,
atk: 134,
def: 110,
spatk: 95,
spdef: 100,
spd: 61
},
larvitar :{
hp: 50,
atk: 64,
def: 50,
spatk: 45,
spdef: 50,
spd: 41
},
pupitar :{
hp: 70,
atk: 84,
def: 70,
spatk: 65,
spdef: 70,
spd: 51
},
megaTyranitar :{
hp: 100,
atk: 164,
def: 150,
spatk: 95,
spdef: 120,
spd: 71
},
pichu :{
hp: 20,
atk: 40,
def: 15,
spatk: 35,
spdef: 35,
spd: 60
},
pikachu :{
hp: 35,
atk: 55,
def: 40,
spatk: 50,
spdef: 50,
spd: 90
},
raichu :{
hp: 60,
atk: 90,
def: 55,
spatk: 90,
spdef: 80,
spd: 110
},
lycanroc :{
hp: 85,
atk: 115,
def: 75,
spatk: 55,
spdef: 75,
spd: 82
},
rockruff :{
hp: 45,
atk: 65,
def: 40,
spatk: 30,
spdef: 40,
spd: 60
},
riolu :{
hp: 40,
atk: 70,
def: 40,
spatk: 35,
spdef: 40,
spd: 60
},
lucario :{
hp: 70,
atk: 110,
def: 70,
spatk: 115,
spdef: 70,
spd: 90
},
megaLucario :{
hp: 70,
atk: 145,
def: 88,
spatk: 140,
spdef: 70,
spd: 112
},
greninja :{
hp: 72,
atk: 95,
def: 67,
spatk: 103,
spdef: 71,
spd: 122
},
froakie :{
hp: 41,
atk: 56,
def: 40,
spatk: 62,
spdef: 44,
spd: 71
},
ashGreninja :{
hp: 72,
atk: 145,
def: 67,
spatk: 153,
spdef: 71,
spd: 132
},
frogadier :{
hp: 54,
atk: 63,
def: 52,
spatk: 83,
spdef: 56,
spd: 97
},
gible :{
hp: 58,
atk: 70,
def: 45,
spatk: 40,
spdef: 45,
spd: 42
},
gabite :{
hp: 68,
atk: 90,
def: 65,
spatk: 50,
spdef: 55,
spd: 82
},
garchomp :{
hp: 108,
atk: 130,
def: 95,
spatk: 80,
spdef: 85,
spd: 102
},
megaGarchomp :{
hp: 108,
atk: 170,
def: 115,
spatk: 120,
spdef: 95,
spd: 92
},
charmander: {
  hp: 39,
  atk: 52,
  def: 43,
  spatk: 60,
  spdef: 50,
  spd: 65
},
charmeleon: {
  hp: 58,
  atk: 64,
  def: 58,
  spatk: 80,
  spdef: 65,
  spd: 80
},
charizard: {
  hp: 78,
  atk: 84,
  def: 78,
  spatk: 109,
  spdef: 85,
  spd: 100
},
aegislash_blade: {
  hp: 60,
  atk: 140,
  def: 50,
  spatk: 140,
  spdef: 50,
  spd: 60
},
doublade: {
  hp: 59,
  atk: 110,
  def: 150,
  spatk: 45,
  spdef: 49,
  spd: 35
},
honedge: {
  hp: 45,
  atk: 80,
  def: 100,
  spatk: 35,
  spdef: 37,
  spd: 28
},
aegislash_shield: {
  hp: 60,
  atk: 50,
  def: 140,
  spatk: 50,
  spdef: 140,
  spd: 60
},
}
export  {pokeStats, typePhotos};