import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LinkButton({page, title, backgroundColor}) {
  return (
    <View style={styles.container}>
      
    <Link href={page}> {title} {backgroundColor} </Link>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: 'green',
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
