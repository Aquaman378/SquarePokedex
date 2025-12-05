import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';

export default function Pichu() {
  console.log(pokeStats.tyranitar.hp)
  const data = {
    name: 'Pichu',
    type1: 'Electric',
    type2: null,
    shinyImage: { uri: typePhotos.pichu },
    evolutionMethod: 'Level up with high friendship',
    funFact: 'Pichu charges electricity by playing with other Pichu.',
    evolutions: [
      { name: 'Pichu', link: '/Pikachu/Pichu', image: typePhotos.pichu, type: 'electric' },
      { name: 'Pikachu', link: '/Pikachu/Pikachu', image: typePhotos.pikachu, type: 'electric' },
      { name: 'Raichu', link: '/Pikachu/Raichu', image: typePhotos.raichu, type: 'electric' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
