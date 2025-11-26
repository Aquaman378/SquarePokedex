import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function Greninja() {
  const data = {
    name: 'Ash Greninja',
    type1: 'Water',
    type2: 'Dark',
    shinyImage: { uri: typePhotos.ashGreninja },
    evolutionMethod: 'Formed through battle bond',
    funFact: 'The red part of Greninjas head matches Ash Ketchums hat in the XYZ series.',
    evolutions: [
      { name: 'Froakie', link: '/Greninja/Froakie', image: typePhotos.froakie, type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: typePhotos.frogadier, type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: typePhotos.greninja, type: 'water' },
      { name: 'Ash Greninja', link: '/Greninja/AshGreninja', image: typePhotos.ashGreninja, type: 'water'},
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
