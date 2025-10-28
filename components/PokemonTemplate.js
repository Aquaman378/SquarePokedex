import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import LinkButton from './LinkButton';
import typeColors from './colorSheet';

export default function PokemonTemplate({ route }) {
  // Destructure the Pokémon data passed through route params
  const { name, type1, type2, shinyImage, evolutionMethod, funFact, evolutions } = route.params;

  // Set main background color based on the Pokémon's primary type
  const mainColor = typeColors[type1.name] || '#ccc';

  return (
    // SafeAreaView keeps content within visible screen boundaries
    <SafeAreaView style={[styles.container, { backgroundColor: mainColor }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Pokémon Name */}
        <Text style={styles.name}>{name}</Text>

        {/* Type Tags (Primary and Secondary Types) */}
        <View style={styles.typeRow}>
          <View style={[styles.typeTag, { backgroundColor: typeColors[type1.name] }]}>
            <Text style={styles.typeText}>{type1.name}</Text>
          </View>

          {/* If Pokémon has a second type, show it */}
          {type2 && (
            <View style={[styles.typeTag, { backgroundColor: typeColors[type2.name] }]}>
              <Text style={styles.typeText}>{type2.name}</Text>
            </View>
          )}
        </View>

        {/* Pokémon Image */}
        <Image source={shinyImage} style={styles.image} resizeMode="contain" />

        {/* Evolution Info and Fun Fact */}
        <Text style={styles.method}>Evolution: {evolutionMethod}</Text>
        <Text style={styles.funFact}>{funFact}</Text>

        {/* Evolution Links */}
        <View style={styles.links}>
          {evolutions.map((evo, i) => (
            <LinkButton
              key={i}
              href={evo.link}
              title={evo.name}
              backgroundColor={typeColors[evo.type?.toLowerCase()] || '#f4f4f4'}
              imageUrl={evo.image}
            />
          ))}
        </View>

        {/* Back to Home Button */}
        <LinkButton
          href="/" // Navigates to main index page
          title="Back to Home"
          imageUrl="https://raw.githubusercontent.com/tiago1820/pokemon-pi/main/client/src/images/icons/home.png?raw=true"
          style={{ alignItems: 'left' }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// Style definitions
const styles = StyleSheet.create({
  container: { flex: 1 }, // Full screen
  scroll: { alignItems: 'center', paddingVertical: 20 },
  name: { fontSize: 28, fontWeight: 'bold', marginVertical: 8 },
  typeRow: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  typeTag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  typeText: { color: '#fff', fontWeight: 'bold' },
  image: { width: 220, height: 220, marginVertical: 10 },
  method: { fontSize: 16, marginVertical: 6 },
  funFact: {
    fontSize: 14,
    fontStyle: 'italic',
    marginVertical: 4,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 16,
  },
  // Style for the back/home button (if customized later)
  backButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  homeButton: {
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'left',  
  },
  backText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
