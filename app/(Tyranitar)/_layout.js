import { Tabs } from 'expo-router' 

export default function TabLayout() {
    return(
        <Tabs>
            screenOptions={{
                headerShown: false
            }}
            <Tabs.Screen name="larvitar" options={{title:"Larvitar"}}/>
            <Tabs.Screen name="pupitar" options={{title:"Pupitar"}}/>
            <Tabs.Screen name="tyranitar" options={{title:"Tyranitar"}}/>
            <Tabs.Screen name="megaTyranitar" options={{title:"Mega Tyranitar"}}/>
        </Tabs>
    )
}