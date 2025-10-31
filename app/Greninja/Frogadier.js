import PokemonTemplate from '../../components/PokemonTemplate';

export default function Frogadier() {
  const data = {
    name: 'Frogadier',
    type1: 'Water',
    type2: null,
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/657.png' },
    evolutionMethod: 'Evolves at level 16',
    funFact: 'Frogadier is capable of scaling a tower over 2,000 feet tall in just one minute.',
    evolutions: [
      { name: 'Froakie', link: '/Greninja/Froakie', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/656.png', type: 'water' },
      { name: 'Frogadier', link: '/Greninja/Frogadier', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/657.png', type: 'water' },
      { name: 'Greninja', link: '/Greninja/Greninja', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658.png', type: 'water' },
      { name: 'Ash Greninja', link: '/Greninja/AshGreninja', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658_f2.png', type: 'water'},
     
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
