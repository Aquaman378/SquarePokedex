import { Tabs } from 'expo-router' 

export default function TabLayout() {
    return(
        <Tabs>
            screenOptions={{
                headerShown: false
            }}
            <Tabs.Screen name="Pichu" options={{title:"Raichu"}}/>
            <Tabs.Screen name="Pikachu" options={{title:"Pikachu"}}/>
            </Tabs>
    )
}