import PokemonTemplate from '../../components/PokemonTemplate';

export default function Garbite() {
  const data = {
    name: 'Gabite',
    type1: 'Dargon',
    type2: 'Ground',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/444.png' },
    evolutionMethod: 'Evolves at level 24',
    funFact: 'In rare cases, it molts and sheds its scales. Medicine containing its scales as an ingredient will make a weary body feel invigorated.',
    evolutions: [
      { name: 'Gible', link: '/Garchomp/Gible', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/443.png', type: 'Dragon' },
      { name: 'Gabite', link: '/Garchomp/Garbite', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/444.png', type: 'Dragon' },
      { name: 'Garchomp', link: '/Garchomp/Garchomp', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445.png', type: 'Dragon' },
      { name: 'Mega Garchomp', link: '/Garchomp/MegaGarchomp', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/445_f2.png', type: 'Dragon'},
     
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}
