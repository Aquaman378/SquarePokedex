import PokemonTemplate from '../../components/PokemonTemplate';

export default function Aegislash() {
  const data = {
    name: 'Aegislash',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png' },
    evolutionMethod: 'Use a Dusk Stone on a Doublade; no specific Level needed',
    funFact: 'Aegislash were used by kings to manipulate and control people and Pokémon. It can apparently detect innate qualities of leadership.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/679.png', type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/680.png', type: 'steel' },
      { name: 'Aegislash', link: '/Aegislash/Aegislash', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png', type: 'steel' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
