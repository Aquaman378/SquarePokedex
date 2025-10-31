import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';


export default function LucarioLayout() {
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
      <Tabs.Screen name="Riolu" options={{ title: 'Riolu' }} />
      <Tabs.Screen name="Lucario" options={{ title: 'Lucario' }} />
      <Tabs.Screen name="Mega Lucario" options={{ title: 'MegaLucario' }} />
      <Tabs.Screen name="index" options={{ title: 'Main page' }} />
    </Tabs>
  );
}
