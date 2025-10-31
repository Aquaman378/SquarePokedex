import PokemonTemplate from '../../components/PokemonTemplate';

export default function Charizard() {
  const data = {
    name: 'Lycanroc',
    type1: 'Rock',
    type2: null,
    shinyImage: { uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a25bad2e-b103-45c6-96b5-7a2e2e2b709d/dbxriou-95345834-1695-4f8f-b1b9-52faaf247f51.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hMjViYWQyZS1iMTAzLTQ1YzYtOTZiNS03YTJlMmUyYjcwOWQvZGJ4cmlvdS05NTM0NTgzNC0xNjk1LTRmOGYtYjFiOS01MmZhYWYyNDdmNTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nZEv4PQ9Cju0YAwHDpTmxvwi2Qz2aBRBnLTTtMnAfKg' },
    evolutionMethod: 'evolves at level 25 during a time of day (day,night,dusk)',
    funFact: 'Lycanroc is a Rock-type Pokémon with three different forms (Midday, Midnight, and Dusk) that depend on how it evolves from Rockruff',
    evolutions: [
      { name: 'Rockruff', link: '/Lycanroc/Rockruff', image: 'https://pbs.twimg.com/media/FSyn7ELWYAUUOfA.jpg:large', type: 'Rock' },
      { name: 'Lycanroc', link: '/Lycanroc/Lycanroc', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a25bad2e-b103-45c6-96b5-7a2e2e2b709d/dbxriou-95345834-1695-4f8f-b1b9-52faaf247f51.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hMjViYWQyZS1iMTAzLTQ1YzYtOTZiNS03YTJlMmUyYjcwOWQvZGJ4cmlvdS05NTM0NTgzNC0xNjk1LTRmOGYtYjFiOS01MmZhYWYyNDdmNTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nZEv4PQ9Cju0YAwHDpTmxvwi2Qz2aBRBnLTTtMnAfKg', type: 'Rock' },]
  };
  return <PokemonTemplate route={{ params: data }} />;
}