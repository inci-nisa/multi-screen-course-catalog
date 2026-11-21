import {View, Text, StyleSheet} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import {COURSES} from '../../data/courses';

export default function CourseDetailScreen(){
const {id}= useLocalSearchParams();
const course =COURSES.find((c)=> c.id===Number(id));

if (!course){
  return(
    <View style={styles.container}>
     <Text style= {styles.errorText}>Ders bulunamadi.</Text>
     </View>
     
  );
}
return(
  <View style={styles.container}>
   <View style={styles.card}>
   <Text style={styles.title}>{course.name}</Text>
   <Text style={styles.instructor}>Ogretim Elemani: {course.instructor}</Text>
   <Text style={styles.description}>{course.description}</Text>
   </View>
   </View>
);
}

const styles= StyleSheet.create({
  container:{flex:1, padding:20, backgroundColor:'#F0F0F5'},
  card:{backgroundColor:'#1A1A40', padding:25, borderRadius:12, borderWidth:1, borderColor:'#6A0DAD'},
  title:{color:'#FFFFFF', fontSize:22, fontWeight:'bold', marginBottom:15},
  instructor:{color:'#E6E6FA', fontSize:16, marginBottom:15, fontStyle:'italic'},
  description:{color:'#FFFFFF', fontSize:16, lineHeight:24},
  errorText:{color:'#1A1A40', fontSize:18, textAlign:'center', marginTop:50, fontWeight:'bold'},
});