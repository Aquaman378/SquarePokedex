import PokemonTemplate from '../../components/PokemonTemplate';

export default function Tyranitar() {
  const data = {
    name: 'Tyranitar',
    type1: 'Rock',
    type2: 'Dark',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png' },
    evolutionMethod: 'Level up a Pupitar at Level 55 or higher',
    funFact: 'Tyranitar has the handpower to make the ground shake and mountains crumble.',
    evolutions: [
      { name: 'Larvitar', link: '/Tyranitar/Larvitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/246.png', type: 'rock' },
      { name: 'Pupitar', link: '/Tyranitar/Pupitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/247.png', type: 'rock' },
      { name: 'Tyranitar', link: '/Tyranitar/Tyranitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png', type: 'rock' },
      { name: 'Mega Tyranitar', link: '/Tyranitar/MegaTyranitar', image: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/47593c73cdf2c006688384c736711a526f5ea267.png', type: 'rock'}
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
