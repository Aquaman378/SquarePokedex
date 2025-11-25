import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function Froakie() {
  const data = {
    name: 'Froakie',
    type1: 'Water',
    type2: null,
    shinyImage: { uri: typePhotos.froakie },
    evolutionMethod: 'First form of Greninja',
    funFact: 'Froakie is both light and strong, making it capable of jumping incredibly high.',
    evolutions: [
      { name: 'Froakie', link: '/Greninja/Froakie', image: typePhotos.froakie, type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: typePhotos.frogadier, type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: typePhotos.greninja, type: 'water' },
      { name: 'Ash Greninja', link: '/Greninja/AshGreninja', image: typePhotos.ashGreninja, type: 'water'},
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
