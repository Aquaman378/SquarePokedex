import PokemonTemplate from '../../components/PokemonTemplate';

export default function Frogadier() {
  const data = {
    name: 'Frogadier',
    type1: 'Water',
    type2: null,
    shinyImage: { uri: '/assests/Frogadier.png' },
    evolutionMethod: 'Evolves at level 16',
    funFact: 'Frogadier is capable of scaling a tower over 2,000 feet tall in just one minute.',
    evolutions: [
    { name: 'Froakie', link: '/Greninja/Froakie', image: '/assests/Froakie.png', type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: '/assests/Frogadier.png', type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: '/assests/Greninja.png', type: 'water' },
     
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
