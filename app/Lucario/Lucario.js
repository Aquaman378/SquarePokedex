import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Lucario',
    type1: 'Fighting',
    type2: 'Steel',
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png' },
    evolutionMethod: 'Becomes Lucario when Riolu levels during the day and has a high friendship level',
    funFact: 'Lucario can sense auras to understand and predict the emotions and movements of living beings from over half a mile away',
    evolutions: [
      { name: 'Riolu', link: '/Lucario/Riolu', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/447.png', type: 'Fighting' },
      { name: 'Lucario', link: '/Lucario/Lucario', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/448.png', type: 'Fighting' },
      { name: 'Mega Lucario', link: '/Lucario/MegaLucario', image: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png', type: 'Fighting' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}