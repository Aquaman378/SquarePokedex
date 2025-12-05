import PokemonTemplate from '../../components/PokemonTemplate';
import {typePhotos, pokeStats} from '../../data/lycanrocks';
export default function Greninja() {
  const data = {
    name: 'Greninja',
    type1: 'Water',
    type2: 'Dark',
    shinyImage: { uri: typePhotos.greninja },
    evolutionMethod: 'Evolves at level 36',
    funFact: 'Greninja has a long enough tounge that it wraps around their neck making a scarf.',
    evolutions: [
      { name: 'Froakie', link: '/Greninja/Froakie', image: typePhotos.froakie, type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: typePhotos.frogadier, type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: typePhotos.greninja, type: 'water' },
      { name: 'Ash Greninja', link: '/Greninja/AshGreninja', image: typePhotos.ashGreninja, type: 'water'},
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
