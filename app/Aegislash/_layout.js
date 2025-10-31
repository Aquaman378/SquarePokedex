import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';

export default function AegislashLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitle: 'Aegislash',
        headerStyle: { backgroundColor: typeColors.steel[500] },
        headerTintColor: '#000',
        tabBarActiveTintColor: typeColors.steel[500],
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', justifyContent: 'flex-start' },
      }}
    >
      <Tabs.Screen name="Honedge" options={{ title: 'Honedge' }} />
      <Tabs.Screen name="Doublade" options={{ title: 'Doublade' }} />
      <Tabs.Screen name="ShieldAegislash" options={{ title: 'Shield Forme Aegislash' }} />
      <Tabs.Screen name="BladeAegislash" options={{ title: 'Blade Forme Aegislash'}} />
    </Tabs>
  );
}
