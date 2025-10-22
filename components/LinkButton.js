import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LinkButton({page, title, backgroundColor}) {
  return (
    <View style={styles.container}>

    <Link href={page}> {title} <Image source={{ uri: imageUrl }} style={styles.image} /> </Link>
    <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'green',
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
