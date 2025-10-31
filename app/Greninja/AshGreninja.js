import PokemonTemplate from '../../components/PokemonTemplate';

export default function Greninja() {
  const data = {
    name: 'Ash Greninja',
    type1: 'Water',
    type2: 'Dark',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658_f2.png' },
    evolutionMethod: 'Formed through battle bond',
    funFact: 'The red part of Greninjas head matches Ash Ketchums hat in the XYZ series.',
    evolutions: [
      { name: 'Froakie', link: '/Greninja/Froakie', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/656.png', type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/657.png', type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658.png', type: 'water' },
      { name: 'Ash Greninja', link: '/Greninja/AshGreninja', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658_f2.png', type: 'water'},
      
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
