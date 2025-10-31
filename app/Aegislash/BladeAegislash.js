import PokemonTemplate from '../../components/PokemonTemplate';

export default function BladeAegislash() {
  const data = {
    name: 'Aegislash',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681_f2.png' },
    evolutionMethod: 'Use a Dusk Stone on a Doublade, no specific Level needed; or use an attacking move in battle with Shield Forme Aegislash',
    funFact: 'With the strength and weight of its blade, Aegislash in this form can cleave any opponent. It once brought a king down with his kingdom through life drainage.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/679.png', type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/680.png', type: 'steel' },
      { name: 'Shield Forme Aegislash', link: '/Aegislash/ShieldAegislash', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png', type: 'steel' },
      { name: 'Blade Forme Aegislash', link: '/Aegislash/BladeAegislash', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681_f2.png', type: 'steel' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
