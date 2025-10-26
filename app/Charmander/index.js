import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charmander() {
  const data = {
    name: 'Charmander',
    type1: 'Fire',
    type2: null,
    shinyImage: { uri: 'https://img.pokemondb.net/artwork/large/charmander.jpg' },
    evolutionMethod: 'Level 16',
    funFact: 'The flame on Charmander’s tail shows its life force. It burns brighter when it’s happy.',
    evolutions: [
      { name: 'Charmander', link: 'Charmander', image: 'https://img.pokemondb.net/artwork/large/charmander.jpg', type: 'fire' },
      { name: 'Charmeleon', link: 'Charmeleon', image: 'https://img.pokemondb.net/artwork/large/charmeleon.jpg', type: 'fire' },
      { name: 'Charizard', link: 'Charizard', image: 'https://img.pokemondb.net/artwork/large/charizard.jpg', type: 'fire' },
    ]
  };

  return <PokemonTemplate route={{ params: data }} />;
}
