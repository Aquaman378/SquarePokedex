import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';

export default function CharmanderLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitle: 'Charmander',
        headerStyle: { backgroundColor: typeColors.fire[500] },
        headerTintColor: '#000',
        tabBarActiveTintColor: typeColors.fire[500],
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', justifyContent: 'flex-start' },
      }}
    >
      <Tabs.Screen name="Charizard" options={{ title: 'Charizard' }} />
      <Tabs.Screen name="Charmander" options={{ title: 'Charmander' }} />
      <Tabs.Screen name="Charmeleon" options={{ title: 'Charmeleon' }} />
    </Tabs>
  );
}
