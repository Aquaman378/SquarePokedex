import typeColors from '../../components/colorSheet';
import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';

export default function Riolu() {
  const data = {
    name: 'Riolu',
    type1: 'Fighting',
    type2: null,
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/447.png' },
    evolutionMethod: 'base pokemon form',
    funFact: 'Lucario can sense auras to understand and predict the emotions and movements of living beings from over half a mile away',
    evolutions: [
      { name: 'Riolu', link: '/Lucario/Riolu', image: typePhotos.riolu, type: 'Fighting' },
      { name: 'Lucario', link: '/Lucario/Lucario', image: typePhotos.lucario, type: 'Fighting' },
      { name: 'Mega Lucario', link: '/Lucario/MegaLucario', image: typePhotos.megaLucario, type: 'Fighting' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}