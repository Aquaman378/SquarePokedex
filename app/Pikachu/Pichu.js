import PokemonTemplate from '../../components/PokemonTemplate';

export default function Pichu() {
  const data = {
    name: 'Pichu',
    type1: 'Electric',
    type2: null,
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png' },
    evolutionMethod: 'Level up with high friendship',
    funFact: 'Pichu charges electricity by playing with other Pichu.',
    evolutions: [
      { name: 'Pichu', link: '/Pikachu/Pichu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png', type: 'electric' },
      { name: 'Pikachu', link: '/Pikachu/Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', type: 'electric' },
      { name: 'Raichu', link: '/Pikachu/Raichu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png', type: 'electric' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
