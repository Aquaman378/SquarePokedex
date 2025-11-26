import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function Pikachu() {
  const data = {
    name: 'Pikachu',
    type1: 'Electric',
    type2: null,
    shinyImage: { uri: typePhotos.pikachu },
    evolutionMethod: 'Use a Thunder Stone',
    funFact: 'Pikachu can generate electricity from its cheeks.',
    evolutions: [
      { name: 'Pichu', link: '/Pikachu/Pichu', image: typePhotos.pichu, type: 'electric' },
      { name: 'Pikachu', link: '/Pikachu/Pikachu', image: typePhotos.pikachu, type: 'electric' },
      { name: 'Raichu', link: '/Pikachu/Raichu', image: typePhotos.raichu, type: 'electric' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
