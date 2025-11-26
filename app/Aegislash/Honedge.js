import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function Aegislash() {
  const data = {
    name: 'Honedge',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: typePhotos.honedge },
    evolutionMethod: 'No evolution, Honedge is caught in the wild',
    funFact: 'Honedge is apparently made when a spirit inhabits a sword. Grabbing its hilt will cause its blue cloth to entangle around the user and suck their life force.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: typePhotos.honedge, type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: typePhotos.doublade, type: 'steel' },
      { name: 'Shield Forme Aegislash', link: '/Aegislash/ShieldAegislash', image: typePhotos.shieldAegislash, type: 'steel' },
      { name: 'Blade Forme Aegislash', link: '/Aegislash/BladeAegislash', image: typePhotos.bladeAegislash, type: 'steel' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
