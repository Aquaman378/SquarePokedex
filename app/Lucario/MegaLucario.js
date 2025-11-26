import PokemonTemplate from '../../components/PokemonTemplate';
import typePhotos from '../../data/lycanrocks';
export default function MegaLucario() {
  const data = {
    name: 'Mega Lucario',
    type1: 'Fighting',
    type2: 'Steel',
    shinyImage: { uri: typePhotos.megaLucario },
    evolutionMethod: 'need a mega evolution stone for Lucario',
    funFact: 'it can focus its powerful aura to become unaffected by the thoughts and feelings of others',
    evolutions: [
      { name: 'Riolu', link: '/Lucario/Riolu', image: typePhotos.riolu, type: 'Fighting' },
      { name: 'Lucario', link: '/Lucario/Lucario', image: typePhotos.lucario, type: 'Fighting' },
      { name: 'Mega Lucario', link: '/Lucario/MegaLucario', image: typePhotos.megaLucario, type: 'Fighting' },
    ],
  };
  return <PokemonTemplate route={{ params: data }} />;
}