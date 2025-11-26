import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function Lucario() {
  const data = {
    name: 'Lucario',
    type1: 'Fighting',
    type2: 'Steel',
    shinyImage: { uri: typePhotos.lucario },
    evolutionMethod: 'Becomes Lucario when Riolu levels during the day and has a high friendship level',
    funFact: 'Lucario can sense auras to understand and predict the emotions and movements of living beings from over half a mile away',
    evolutions: [
      { name: 'Riolu', link: '/Lucario/Riolu', image: typePhotos.riolu, type: 'Fighting' },
      { name: 'Lucario', link: '/Lucario/Lucario', image: typePhotos.lucario, type: 'Fighting' },
      { name: 'Mega Lucario', link: '/Lucario/MegaLucario', image: typePhotos.megaLucario, type: 'Fighting' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}