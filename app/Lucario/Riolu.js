import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Riolu',
    type1: 'Fighting',
    type2: null,
    shinyImage: { uri: 'https://dinopixel.com/preload/1022/Shiny-Riolu.png' },
    evolutionMethod: 'base pokemon form',
    funFact: 'Lucario can sense auras to understand and predict the emotions and movements of living beings from over half a mile away',
    evolutions: [
      { name: 'Riolu', link: '/Lucario/Riolu', image: 'https://static.wikia.nocookie.net/pokemonempyrean/images/6/66/447.png/revision/latest?cb=20200825125040', type: 'Fighting' },
      { name: 'Lucario', link: '/Lucario/Lucario', image: 'https://art.pixilart.com/68404e28f32dbed.png', type: 'Fighting' },
      { name: 'Mega Lucario', link: '/Lucario/MegaLucario', image: 'https://www.nicepng.com/png/full/39-397478_mega-lucario-pixel-art-pokemon-mega-lucario.png', type: 'Fighting' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}