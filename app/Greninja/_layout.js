import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';

export default function GreninjaLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
      <Tabs.Screen name="Ash Greninja" options={{ title: 'AshGreninja'}}/>
      <Tabs.Screen name="index" options={{ title: 'index'}}/>
    </Tabs>
  );
}
