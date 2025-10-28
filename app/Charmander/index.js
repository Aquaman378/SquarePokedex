import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charmander() {
  const data = {
    name: 'Charmander',
    type1: 'Fire',
    type2: null,
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png' },
    evolutionMethod: 'Level 16',
    funFact: 'The flame on Charmander’s tail shows its life force. It burns brighter when it’s happy.',
    evolutions: [
      { name: 'Charmander', link: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', type: 'fire' },
      { name: 'Charmeleon', link: 'Charmeleon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', type: 'fire' },
      { name: 'Charizard', link: 'Charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', type: 'fire' },
    ]
  };

  return <PokemonTemplate route={{ params: data }} />;
}
