import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return(
<Drawer
    ScreenOptions={{
        headerShown: false
    }}
>
    <Drawer.Screen name="first" options={{drawerlabel:"home", title:"first"}}/>
</Drawer>
  )

}