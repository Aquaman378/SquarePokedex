import PokemonTemplate from '../../components/PokemonTemplate';

export default function Garchomp() {
  const data = {
    name: 'Garchomp',
    type1: 'Dargon',
    type2: 'Ground',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445.png' },
    evolutionMethod: 'Evolves at level 48',
    funFact: 'It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.',
    evolutions: [
      { name: 'Gible', link: '/Garchomp/Gible', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/443.png', type: 'Dragon' },
      { name: 'Gabite', link: '/Garchomp/Gabite', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/444.png', type: 'Dragon' },
      { name: 'Garchomp', link: '/Garchomp/Garchomp', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445.png', type: 'Dragon' },
      { name: 'Mega Garchomp', link: '/Garchomp/MegaGarchomp', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445_f2.png', type: 'Dragon' },

    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
