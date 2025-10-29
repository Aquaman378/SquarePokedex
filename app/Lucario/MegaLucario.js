import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Lucario',
    type1: 'Fighting',
    type2: 'Steel',
    shinyImage: { uri: 'https://art.pixilart.com/080627fc87ad9dd.png' },
    evolutionMethod: 'need a mega evolution stone for Lucario',
    funFact: 'it can focus its powerful aura to become unaffected by the thoughts and feelings of others',
    evolutions: [
      { name: 'Riolu', link: '/Lucario/Riolu', image: 'https://static.wikia.nocookie.net/pokemonempyrean/images/6/66/447.png/revision/latest?cb=20200825125040', type: 'Fighting' },
      { name: 'Lucario', link: '/Lucario/Lucario', image: 'https://art.pixilart.com/68404e28f32dbed.png', type: 'Fighting' },
      { name: 'Mega Lucario', link: '/Lucario/MegaLucario', image: 'https://www.nicepng.com/png/full/39-397478_mega-lucario-pixel-art-pokemon-mega-lucario.png', type: 'Fighting' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}