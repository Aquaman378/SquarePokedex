import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';

export default function TyranitarLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: 'Tyranitar',
        headerStyle: { backgroundColor: typeColors.rock[500] },
        headerTintColor: '#000',
        tabBarActiveTintColor: typeColors.rock[500],
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', justifyContent: 'flex-start' },
      }}
    >
      <Tabs.Screen name="Larvitar" options={{ title: 'Larvitar' }} />
      <Tabs.Screen name="Pupitar" options={{ title: 'Pupitar' }} />
      <Tabs.Screen name="Tyranitar" options={{ title: 'Tyranitar' }} />
      <Tabs.Screen name="MegaTyranitar" options={{ title: 'Mega Tyranitar'}} />
      <Tabs.Screen name="index" options={{ title: 'Main page' }} />
    </Tabs>
  );
}
