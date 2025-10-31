import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Riolu',
    type1: 'Fighting',
    type2: null,
    shinyImage: { uri: 'https://img.pokemondb.net/artwork/large/riolu.jpg' },
    evolutionMethod: 'base pokemon form',
    funFact: 'Lucario can sense auras to understand and predict the emotions and movements of living beings from over half a mile away',
    evolutions: [
      { name: 'Riolu', link: '/Lucario/Riolu', image: 'https://img.pokemondb.net/artwork/large/riolu.jpg', type: 'Fighting' },
      { name: 'Lucario', link: '/Lucario/Lucario', image: 'https://upload.wikimedia.org/wikipedia/en/9/95/Pok%C3%A9mon_Lucario_art.png', type: 'Fighting' },
      { name: 'Mega Lucario', link: '/Lucario/MegaLucario', image: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png', type: 'Fighting' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}