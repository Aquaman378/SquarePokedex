import { Tabs } from 'expo-router';
import typeColors from '../../components/colorSheet';


export default function LycanrocLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: 'Lycanroc',
        headerStyle: { backgroundColor: typeColors.rock },
        headerTintColor: '#000',
        tabBarActiveTintColor: typeColors.rock,
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
