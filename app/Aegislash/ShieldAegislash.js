import PokemonTemplate from '../../components/PokemonTemplate';

export default function Aegislash() {
  const data = {
    name: 'Aegislash',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png' },
    evolutionMethod: 'Use a Dusk Stone on a Doublade, no specific Level needed; or use King’s Shield in battle with Sword Forme Aegislash',
    funFact: 'In this form, Aegislash uses its steel body and a spectral force field to protect itself against incoming attacks. Its spectral powers can manipulate others.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/679.png', type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/680.png', type: 'steel' },
      { name: 'Shield Forme Aegislash', link: '/Aegislash/ShieldAegislash', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png', type: 'steel' },
      { name: 'Blade Forme Aegislash', link: '/Aegislash/BladeAegislash', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681_f2.png', type: 'steel' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
