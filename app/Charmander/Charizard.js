import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Charizard',
    type1: 'Fire',
    type2: 'Flying',
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' },
    evolutionMethod: 'Final evolution of Charmander',
    funFact: 'Charizard breathes intense flames that can melt any material.',
    evolutions: [
      {
        name: 'Charmander',
        link: '/Charmander',
        type: 'Fire',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      },
      {
        name: 'Charmeleon',
        link: '/Charmeleon',
        type: 'Fire',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
