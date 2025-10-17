import { Tabs } from 'expo-router' 

export default function TabLayout() {
    return(
        <Tabs>
            screenOptions={{
                headerShown: false
            }}
            <Tabs.Screen name="Larvitar" options={{title:"Larvitar"}}/>
            <Tabs.Screen name="Pupitar" options={{title:"Pupitar"}}/>
            <Tabs.Screen name="Tyranitar" options={{title:"Tyranitar"}}/>
            <Tabs.Screen name="Mega Tyranitar" options={{title:"Mega Tyranitar"}}/>
        </Tabs>
    )
}