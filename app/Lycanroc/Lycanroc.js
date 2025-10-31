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
      { name: 'Rockruff', link: '/Lycanroc/Rockruff', image: 'https://pbs.twimg.com/media/FSyn7ELWYAUUOfA.jpg:large', type: 'Rock' },
      { name: 'Lycanroc', link: '/Lycanroc/Lycanroc', image: 'https://img.pokemondb.net/artwork/large/lycanroc-midnight.jpg', type: 'Rock' },]
  };
  return <PokemonTemplate route={{ params: data }} />;
}