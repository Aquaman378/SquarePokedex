import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Lycanroc',
    type1: 'Rock',
    type2: null,
    shinyImage: { uri: 'https://img.pokemondb.net/artwork/large/lycanroc-midnight.jpg' },
    evolutionMethod: 'evolves at level 25 during a time of day (day,night,dusk)',
    funFact: 'Lycanroc is a Rock-type Pokémon with three different forms (Midday, Midnight, and Dusk) that depend on how it evolves from Rockruff',
    evolutions: [
      { name: 'Rockruff', link: '/Lycanroc/Rockruff', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png', type: 'Rock' },
      { name: 'Lycanroc', link: '/Lycanroc/Lycanroc', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/745_f2.png', type: 'Rock' },
    ]
  };
  return <PokemonTemplate route={{ params: data }} />;
}