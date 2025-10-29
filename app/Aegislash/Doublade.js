import PokemonTemplate from '../../components/PokemonTemplate';

export default function Aegislash() {
  const data = {
    name: 'Doublade',
    type1: 'Steel',
    type2: 'Ghost',
    shinyImage: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/680.png' },
    evolutionMethod: 'Level up a Honedge at Level 35 or higher',
    funFact: 'These two blades are divided from the main blade after evolution and actually cooperate in combat using telepathy.',
    evolutions: [
      { name: 'Honedge', link: '/Aegislash/Honedge', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/679.png', type: 'steel' },
      { name: 'Doublade', link: '/Aegislash/Doublade', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/680.png', type: 'steel' },
      { name: 'Aegislash', link: '/Aegislash/Aegislash', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png', type: 'steel' },
    ],
  };

  return <PokemonTemplate route={{ params: data }} />;
}
