import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LinkButton({ href, title, backgroundColor, imageUrl }) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Link href={href} style={styles.link}>
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
          {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
  },
  link: { alignItems: 'center' },
  content: { alignItems: 'center' },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
