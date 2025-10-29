import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';

export default function AegislashLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
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
      <Tabs.Screen name="Aegislash" options={{ title: 'Aegislash' }} />
    </Tabs>
  );
}
