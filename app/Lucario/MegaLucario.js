import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Lucario',
    type1: 'Fighting',
    type2: 'Steel',
    shinyImage: { uri: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png' },
    evolutionMethod: 'need a mega evolution stone for Lucario',
    funFact: 'it can focus its powerful aura to become unaffected by the thoughts and feelings of others',
    evolutions: [
      { name: 'Riolu', link: '/Lucario/Riolu', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/447.png', type: 'Fighting' },
      { name: 'Lucario', link: '/Lucario/Lucario', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/448.png', type: 'Fighting' },
      { name: 'Mega Lucario', link: '/Lucario/MegaLucario', image: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png', type: 'Fighting' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}