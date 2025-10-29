import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charmeleon() {
  const data = {
    name: 'Larvitar',
    type1: 'Rock',
    type2: 'Ground',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/246.png' },
    evolutionMethod: 'No evolution; Larvitar is caught in the wild',
    funFact: 'Larvitar is born deep underground and is capable of eating an entire mountain worth of soil.',
    evolutions: [
      { name: 'Larvitar', link: '/Tyranitar/Larvitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/246.png', type: 'rock' },
      { name: 'Pupitar', link: '/Tyranitar/Pupitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/247.png', type: 'rock' },
      { name: 'Tyranitar', link: '/Tyranitar/Tyranitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png', type: 'rock' },
      { name: 'Mega Tyranitar', link: '/Tyranitar/MegaTyranitar', image: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/47593c73cdf2c006688384c736711a526f5ea267.png', type: 'rock'}
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
