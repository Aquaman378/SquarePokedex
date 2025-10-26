import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Charmander"
        options={{
          title: 'Charmander',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="fire" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Charmeleon"
        options={{
          title: 'Charmeleon',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="fire" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Charizard"
        options={{
          title: 'Charizard',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="fire" color={color} />,
        }}
      />
    </Tabs>
  );
}
