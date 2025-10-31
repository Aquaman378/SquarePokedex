import PokemonTemplate from '../../components/PokemonTemplate';

export default function Aegislash() {
  const data = {
    name: 'Honedge',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/679.png' },
    evolutionMethod: 'No evolution, Honedge is caught in the wild',
    funFact: 'Honedge is apparently made when a spirit inhabits a sword. Grabbing its hilt will cause its blue cloth to entangle around the user and suck their life force.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/679.png', type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/680.png', type: 'steel' },
      { name: 'Shield Forme Aegislash', link: '/Aegislash/ShieldAegislash', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png', type: 'steel' },
      { name: 'Blade Forme Aegislash', link: '/Aegislash/BladeAegislash', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681_f2.png', type: 'steel' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
