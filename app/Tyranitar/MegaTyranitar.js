import PokemonTemplate from '../../components/PokemonTemplate';

export default function MegaTyranitar() {
  const data = {
    name: 'Mega Tyranitar',
    type1: 'Rock',
    type2: 'Dark',
    shinyImage: { uri: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/47593c73cdf2c006688384c736711a526f5ea267.png' },
    evolutionMethod: 'Use a held Tyranitarite on a Tyranitar in battle',
    funFact: 'After mega evolution, Tyranitar has its back split open. It is driven solely by its desire to destroy.',
    evolutions: [
      { name: 'Larvitar', link: '/Tyranitar/Larvitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/246.png', type: 'rock' },
      { name: 'Pupitar', link: '/Tyranitar/Pupitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/247.png', type: 'rock' },
      { name: 'Tyranitar', link: '/Tyranitar/Tyranitar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png', type: 'rock' },
      { name: 'Mega Tyranitar', link: '/Tyranitar/MegaTyranitar', image: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/47593c73cdf2c006688384c736711a526f5ea267.png', type: 'rock'}
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
