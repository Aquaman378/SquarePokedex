import PokemonTemplate from '../../components/PokemonTemplate';

export default function Greninja() {
  const data = {
    name: 'Greninja',
    type1: 'Water',
    type2: 'Dark',
    shinyImage: { uri: '/assests/Greninja.png' },
    evolutionMethod: 'Evolves at level 36',
    funFact: 'Greninja has a long enough tounge that it wraps around their neck making a scarf.',
    evolutions: [
     { name: 'Froakie', link: '/Greninja/Froakie', image: '/assests/Froakie.png', type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: '/assests/Frogadier.png', type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: '/assests/Greninja.png', type: 'water' },
      
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
