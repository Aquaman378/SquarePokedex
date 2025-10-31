import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';

export default function GarchompLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitle: 'Garchomp',
        headerStyle: { backgroundColor: typeColors.dragon[500] },
        headerTintColor: '#000',
        tabBarActiveTintColor: typeColors.dragon[500],
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', justifyContent: 'flex-start' },
      }}
    >
      <Tabs.Screen name="Gible" options={{ title: 'Gible' }} />
      <Tabs.Screen name="Gabite" options={{ title: 'Gabite' }} />
      <Tabs.Screen name="Garchomp" options={{ title: 'Garchomp' }} />
      <Tabs.Screen name="MegaGarchomp" options={{ title: 'Mega Garchomp'}}/>
    </Tabs>
  );
}
