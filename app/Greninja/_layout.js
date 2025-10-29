import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';

export default function GreninjaLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: 'Greninja',
        headerStyle: { backgroundColor: typeColors.water[500] },
        headerTintColor: '#000',
        tabBarActiveTintColor: typeColors.water[500],
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', justifyContent: 'flex-start' },
      }}
    >
      <Tabs.Screen name="Froakie" options={{ title: 'Froakie' }} />
      <Tabs.Screen name="Frogadier" options={{ title: 'Frogadier' }} />
      <Tabs.Screen name="Greninja" options={{ title: 'Greninja' }} />
      <Tabs.Screen name="MegaGreninja" options={{ title: 'MegaGreninja' }} />
      <Tabs.Screen name="AshGreninja" options={{ title: 'Ash Greninja'}}/>
    </Tabs>
  );
}
