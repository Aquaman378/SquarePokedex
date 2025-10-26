import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charmander() {
  const data = {
    name: 'Charmander',
    type1: 'Fire',
    type2: null,
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' },
    evolutionMethod: 'Level 16 to evolve into Charmeleon',
    funFact: 'Charmander’s tail flame burns brighter when it is happy and weakens when it is tired.',
    evolutions: [
      { name: 'Charmeleon', link: 'Charmeleon', type: 'Fire', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
      { name: 'Charizard', link: 'Charizard', type: 'Fire', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    ]

  };

  return <PokemonTemplate route={{ params: data }} />;
}
