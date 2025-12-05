import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';
export default function ShieldAegislash() {
  const data = {
    name: 'Aegislash',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: typePhotos.shieldAegislash },
    evolutionMethod: 'Use a Dusk Stone on a Doublade, no specific Level needed; or use King’s Shield in battle with Sword Forme Aegislash',
    funFact: 'In this form, Aegislash uses its steel body and a spectral force field to protect itself against incoming attacks. Its spectral powers can manipulate others.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: typePhotos.honedge, type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: typePhotos.doublade, type: 'steel' },
      { name: 'Shield Forme Aegislash', link: '/Aegislash/ShieldAegislash', image: typePhotos.shieldAegislash, type: 'steel' },
      { name: 'Blade Forme Aegislash', link: '/Aegislash/BladeAegislash', image: typePhotos.bladeAegislash, type: 'steel' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
