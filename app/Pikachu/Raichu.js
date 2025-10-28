import PokemonTemplate from '../../components/PokemonTemplate';

export default function Raichu() {
  const data = {
    name: 'Raichu',
    type1: 'Electric',
    type2: null,
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png' },
    evolutionMethod: 'Use a Thunder Stone',
    funFact: 'Raichu can discharge 100,000 volts of electricity.',
    evolutions: [
      { name: 'Pichu', link: '/Pikachu/Pichu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png', type: 'electric' },
      { name: 'Pikachu', link: '/Pikachu/Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', type: 'electric' },
      { name: 'Raichu', link: '/Pikachu/Raichu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png', type: 'electric' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
