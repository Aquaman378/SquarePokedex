import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function BladeAegislash() {
  const data = {
    name: 'Aegislash',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: typePhotos.bladeAegislash },
    evolutionMethod: 'Use a Dusk Stone on a Doublade, no specific Level needed; or use an attacking move in battle with Shield Forme Aegislash',
    funFact: 'With the strength and weight of its blade, Aegislash in this form can cleave any opponent. It once brought a king down with his kingdom through life drainage.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: typePhotos.honedge, type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: typePhotos.doublade, type: 'steel' },
      { name: 'Shield Forme Aegislash', link: '/Aegislash/ShieldAegislash', image: typePhotos.shieldAegislash, type: 'steel' },
      { name: 'Blade Forme Aegislash', link: '/Aegislash/BladeAegislash', image: typePhotos.bladeAegislash, type: 'steel' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}