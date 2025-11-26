import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';
export default function Pupitar() {
  const data = {
    name: 'Pupitar',
    type1: 'Rock',
    type2: 'Ground',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/247.png' },
    evolutionMethod: 'Level up a Larvitar at Level 30 or higher',
    funFact: 'It can still move in its sheetrock-tough shell. It is capable of toppling mountains, even in this state.',
    evolutions: [
      { name: 'Larvitar', link: '/Tyranitar/Larvitar', image: typePhotos.larvitar, type: 'rock' },
      { name: 'Pupitar', link: '/Tyranitar/Pupitar', image: typePhotos.pupitar, type: 'rock' },
      { name: 'Tyranitar', link: '/Tyranitar/Tyranitar', image: typePhotos.tyranitar, type: 'rock' },
      { name: 'Mega Tyranitar', link: '/Tyranitar/MegaTyranitar', image: typePhotos.megaTyranitar, type: 'rock'}
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
