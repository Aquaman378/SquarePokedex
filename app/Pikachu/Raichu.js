import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';

export default function Raichu() {
  const data = {
    name: 'Raichu',
    type1: 'Electric',
    type2: null,
    shinyImage: { uri: typePhotos.raichu },
    evolutionMethod: 'Use a Thunder Stone',
    funFact: 'Raichu can discharge 100,000 volts of electricity.',
    evolutions: [
      { name: 'Pichu', link: '/Pikachu/Pichu', image: typePhotos.pichu, type: 'electric' },
      { name: 'Pikachu', link: '/Pikachu/Pikachu', image: typePhotos.pikachu, type: 'electric' },
      { name: 'Raichu', link: '/Pikachu/Raichu', image: typePhotos.raichu, type: 'electric' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
