import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';


export default function PikachuLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: 'Pikachu',
        headerStyle: { backgroundColor: typeColors.electric[500] },
        headerTintColor: '#000',
        tabBarActiveTintColor: typeColors.electric[500],
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', justifyContent: 'flex-start' },
      }}
    >
      <Tabs.Screen name="Pichu" options={{ title: 'Pichu' }} />
      <Tabs.Screen name="Pikachu" options={{ title: 'Pikachu' }} />
      <Tabs.Screen name="Raichu" options={{ title: 'Raichu' }} />
      <Tabs.Screen name="index" options={{ title: 'Main page' }} />
    </Tabs>
  );
}
