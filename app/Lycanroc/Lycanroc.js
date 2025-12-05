import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';
export default function Lycanroc() {
  const data = {
    name: 'Lycanroc',
    type1: 'Rock',
    type2: null,
    shinyImage: { uri: typePhotos.lycanroc },
    evolutionMethod: 'evolves at level 25 during a time of day (day,night,dusk)',
    funFact: 'Lycanroc is a Rock-type Pokémon with three different forms (Midday, Midnight, and Dusk) that depend on how it evolves from Rockruff',
    evolutions: [
      { name: 'Rockruff', link: '/Lycanroc/Rockruff', image: typePhotos.rockruff, type: 'Rock' },
      { name: 'Lycanroc', link: '/Lycanroc/Lycanroc', image: typePhotos.lycanroc, type: 'Rock' },
    ]
  };
  return <PokemonTemplate route={{ params: data }} />;
}