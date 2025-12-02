import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';
export default function Tyranitar() {
  const data = {
    name: 'Tyranitar',
    type1: 'Rock',
    type2: 'Dark',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png' },
    evolutionMethod: 'Level up a Pupitar at Level 55 or higher',
    funFact: 'Tyranitar has the handpower to make the ground shake and mountains crumble.',
    evolutions: [
      { name: 'Larvitar', link: '/Tyranitar/Larvitar', image: typePhotos.larvitar, type: 'rock' },
      { name: 'Pupitar', link: '/Tyranitar/Pupitar', image: typePhotos.pupitar, type: 'rock' },
      { name: 'Tyranitar', link: '/Tyranitar/Tyranitar', image: typePhotos.tyranitar, type: 'rock' },
      { name: 'Mega Tyranitar', link: '/Tyranitar/MegaTyranitar', image: typePhotos.megaTyranitar, type: 'rock'}
    ],
  };

  return (
      <PokemonTemplate route={{ params: data }} />
  );
}
