import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';

export default function MegaTyranitar() {
  const data = {
    name: 'Mega Tyranitar',
    type1: 'Rock',
    type2: 'Dark',
    shinyImage: { uri: typePhotos.megaTyranitar },
    evolutionMethod: 'Use a held Tyranitarite on a Tyranitar in battle',
    funFact: 'After mega evolution, Tyranitar has its back split open. It is driven solely by its desire to destroy.',
    evolutions: [
      { name: 'Larvitar', link: '/Tyranitar/Larvitar', image: typePhotos.larvitar, type: 'rock' },
      { name: 'Pupitar', link: '/Tyranitar/Pupitar', image: typePhotos.pupitar, type: 'rock' },
      { name: 'Tyranitar', link: '/Tyranitar/Tyranitar', image: typePhotos.tyranitar, type: 'rock' },
      { name: 'Mega Tyranitar', link: '/Tyranitar/MegaTyranitar', image: typePhotos.megaTyranitar, type: 'rock'}
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
