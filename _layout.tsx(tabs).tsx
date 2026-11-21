import {Tabs} from 'expo-router';
export default function TabLayout(){
  return(
    <Tabs
    screenOptions={{
      headerStyle:{backgroundColor:'#6A0DAD'},
      headerTintColor:'#fff',
      tabBarStyle: {backgroundColor:'#1A1A40', paddingBottom:5},
      tabBarActiveTintColor:'#E6E6FA',
      tabBarInactiveTintColor:'#888',

    }}
   >
    <Tabs.Screen
    name="index"
    options={{title:'Ders Listesi', tabBarLabel:'Dersler'}}
    />
    <Tabs.Screen
    name="about"
    options={{title:'Hakkında', tabBarLabel:'Hakkında'}} 
    />
    </Tabs>ss
  );
}