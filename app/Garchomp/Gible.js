import PokemonTemplate from '../../components/PokemonTemplate';

export default function Gible() {
  const data = {
    name: 'Gible',
    type1: 'Dargon',
    type2: 'Ground',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/443.png' },
    evolutionMethod: 'First form of Garchomp',
    funFact: 'It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.',
    evolutions: [
      { name: 'Gible', link: '/Garchomp/Gible', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/443.png', type: 'Dragon' },
      { name: 'Garbite', link: '/Garchomp/Garbite', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/444.png', type: 'Dragon' },
      { name: 'Garchomp', link: '/Garchomp/Garchomp', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445.png', type: 'Dragon' },
      { name: 'Mega Garchomp', link: '/Garchomp/MegaGarchomp', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445_f2.png', type: 'Dragon'},
     
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
