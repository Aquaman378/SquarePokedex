import { Stack } from 'expo-router';

export default function RootLayout(){
    return (
    
    
        <Stack>
            <Stack.Screen name="Main page" options={{title: "index"}}/>
            <Stack.Screen name="Pikachu" options={{title: "Pikachu"}}/>
            <Stack.Screen name="Charmander" options={{title: "Charmander"}}/>
            <Stack.Screen name="Aegislash" options={{title: "Aegislash"}}/>
            <Stack.Screen name="Tyranitar" options={{title: "Tyranitar"}}/>
            <Stack.Screen name="Lycanroc" options={{title: "Lycanroc"}}/>
            <Stack.Screen name="Lucario" options={{title: "Lucario"}}/>
            <Stack.Screen name="Greninja" options={{title: "Greninja"}}/>
            <Stack.Screen name="Garchomp" options={{title: "Garchomp"}}/>
            
        </Stack>

    )
}