import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';
export default function Larvitar() {
  const data = {
    name: 'Larvitar',
    type1: 'Rock',
    type2: 'Ground',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/246.png' },
    evolutionMethod: 'No evolution, Larvitar is caught in the wild',
    funFact: 'Larvitar is born deep underground and is capable of eating an entire mountain worth of soil.',
    evolutions: [
      { name: 'Larvitar', link: '/Tyranitar/Larvitar', image: typePhotos.larvitar, type: 'rock' },
      { name: 'Pupitar', link: '/Tyranitar/Pupitar', image: typePhotos.pupitar, type: 'rock' },
      { name: 'Tyranitar', link: '/Tyranitar/Tyranitar', image: typePhotos.tyranitar, type: 'rock' },
      { name: 'Mega Tyranitar', link: '/Tyranitar/MegaTyranitar', image: typePhotos.megaTyranitar, type: 'rock'}
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
