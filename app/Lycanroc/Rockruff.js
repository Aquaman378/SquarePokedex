import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function Rockruff() {
  const data = {
    name: 'Rockruff',
    type1: 'Rock',
    type2: null,
    shinyImage: { uri: typePhotos.rockruff },
    evolutionMethod: 'base pokemon form',
    funFact: 'Rockruff has the ability to use the scent of its trainer to track them for days if it gets lost',
    evolutions: [
      { name: 'Rockruff', link: '/Lycanroc/Rockruff', image: typePhotos.rockruff, type: 'Rock' },
      { name: 'Lycanroc', link: '/Lycanroc/Lycanroc', image: typePhotos.lycanroc, type: 'Rock' },
    ]
  };
  return <PokemonTemplate route={{ params: data }} />;
}