import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Charizard',
    type1: 'Fire',
    type2: 'Flying',
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png' },
    evolutionMethod: 'Final evolution of Charmander',
    funFact: 'Charizard breathes intense flames that can melt any material.',
    evolutions: [
      { name: 'Charmander', link: '/Charmander/Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', type: 'fire' },
      { name: 'Charmeleon', link: '/Charmander/Charmeleon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', type: 'fire' },
      { name: 'Charizard', link: '/Charmander/Charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', type: 'fire' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
