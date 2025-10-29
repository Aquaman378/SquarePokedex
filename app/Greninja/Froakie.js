import PokemonTemplate from '../../components/PokemonTemplate';

export default function Froakie() {
  const data = {
    name: 'Froakie',
    type1: 'Water',
    type2: null,
    shinyImage: { uri: '/assests/Froakie.png' },
    evolutionMethod: 'First form of Greninja',
    funFact: 'Froakie is both light and strong, making it capable of jumping incredibly high.',
    evolutions: [
      { name: 'Froakie', link: '/Greninja/Froakie', image: '/assests/Froakie.png', type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: '/assests/Frogadier.png', type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: '/assests/Greninja.png', type: 'water' },
     
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
