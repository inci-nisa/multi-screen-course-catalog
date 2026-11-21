import {View, Text, StyleSheet} from 'react-native';

export default function AboutScreen(){
  return(
    <View style={styles.container}>
     <View style= {styles.card}>
      <Text style={styles.title}>Ders Katalogu</Text>
      <Text style={styles.info}>2026 Guz Donemi</Text>
      <Text style={styles.description}>
       Bu uygulama, Expo router ile Tab Navigation ve dinamik route parametrelerini kullanarak gelistirilmistir.
       </Text>
      </View>
     </View>  
  );
}

const styles= StyleSheet.create({
  container: {flex:1, padding:20, backgroundColor:'#F0F0F5', justifyContent:'center'},
  card:{backgroundColor:'#6A0DAD', padding:25, borderRadius:12},
  title:{ color:'#FFFFFF', fontSize:22, fontWeight:'bold', marginBottom:15, textAlign:'center'},
  info:{ color:'#E6E6FA', fontSize:16, marginBottom:15, textAlign:'center', fontWeight:'bold'},
  description:{ color:'#FFFFFF', fontSize:16, lineHeight:24, textAlign:'center'},
});