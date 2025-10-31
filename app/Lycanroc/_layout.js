import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';


export default function PikachuLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitle: 'Lucario',
        headerStyle: { backgroundColor: typeColors.fighting },
        headerTintColor: '#000',
        tabBarActiveTintColor: typeColors.fighting,
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', justifyContent: 'flex-start' },
      }}
    >
      <Tabs.Screen name="Rockruff" options={{ title: 'Rockruff' }} />
      <Tabs.Screen name="Lycanroc" options={{ title: 'Lycanroc' }} />
      <Tabs.Screen name="index" options={{ title: 'Main page' }} />
    </Tabs>
  );
}
