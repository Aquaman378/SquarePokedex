import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function Frogadier() {
  const data = {
    name: 'Frogadier',
    type1: 'Water',
    type2: null,
    shinyImage: { uri: typePhotos.frogadier },
    evolutionMethod: 'Evolves at level 16',
    funFact: 'Frogadier is capable of scaling a tower over 2,000 feet tall in just one minute.',
    evolutions: [
      { name: 'Froakie', link: '/Greninja/Froakie', image: typePhotos.froakie, type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: typePhotos.frogadier, type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: typePhotos.greninja, type: 'water' },
      { name: 'Ash Greninja', link: '/Greninja/AshGreninja', image: typePhotos.ashGreninja, type: 'water'},
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
