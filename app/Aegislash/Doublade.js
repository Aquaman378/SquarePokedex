import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function Aegislash() {
  const data = {
    name: 'Doublade',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: typePhotos.doublade },
    evolutionMethod: 'Level up a Honedge at Level 35 or higher',
    funFact: 'These two blades are divided from the main blade after evolution and actually cooperate in combat using telepathy.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: typePhotos.honedge, type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: typePhotos.doublade, type: 'steel' },
      { name: 'Shield Forme Aegislash', link: '/Aegislash/ShieldAegislash', image: typePhotos.shieldAegislash, type: 'steel' },
      { name: 'Blade Forme Aegislash', link: '/Aegislash/BladeAegislash', image: typePhotos.bladeAegislash, type: 'steel' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
