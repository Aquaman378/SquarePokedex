import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charmeleon() {
  const data = {
    name: 'Charmeleon',
    type1: 'Fire',
    type2: null,
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png' },
    evolutionMethod: 'Level 36 to evolve into Charizard',
    funFact: 'Charmeleon’s fiery tail intensifies during battle.',
    evolutions: [
      { name: 'Charmander', link: '/Charmander/Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', type: 'fire' },
      { name: 'Charmeleon', link: '/Charmander/Charmeleon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', type: 'fire' },
      { name: 'Charizard', link: '/Charmander/Charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', type: 'fire' },
    ],
  };
  

  return {
    component: <PokemonTemplate route={{ params: data }} />,
    //battleStats: {
      //hp: 58,
      //attack: 64,
    //},
  };
}
