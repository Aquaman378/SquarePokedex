import PokemonTemplate from '../../components/PokemonTemplate';

export default function Rockruff() {
  const data = {
    name: 'Rockruff',
    type1: 'Rock',
    type2: null,
    shinyImage: { uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png' },
    evolutionMethod: 'base pokemon form',
    funFact: 'Rockruff has the ability to use the scent of its trainer to track them for days if it gets lost',
    evolutions: [
      { name: 'Rockruff', link: '/Lycanroc/Rockruff', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png', type: 'Rock' },
      { name: 'Lycanroc', link: '/Lycanroc/Lycanroc', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/745_f2.png', type: 'Rock' },
    ]
  };
  return <PokemonTemplate route={{ params: data }} />;
}