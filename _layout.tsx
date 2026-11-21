import {Stack} from 'expo-router';
export default function RootLayout(){
  return(
    <Stack
     screenOptions={{
      headerStyle:{backgroundColor:'#6A0DAD'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight:'bold'},
     }}
    >
    <Stack.Screen name= "(tabs)" options ={{headerShown:false}}/>
    <Stack.Screen name= "course/[id]" options={{title:'Ders Detayı'}}/>
   </Stack>  
  );
}