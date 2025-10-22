import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LinkButton({ page, title, backgroundColor, imageUrl }) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Link href={page}>
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      </Link>
      <StatusBar style="auto" />
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
  content: {
    alignItems: 'center',
  },
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
