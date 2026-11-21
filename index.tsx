import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import{useRouter} from 'expo-router';
import { COURSES, Course} from '../../data/courses';

export default function CoursesScreen(){
  const router= useRouter();

  const renderCourse= ({item }: {item: Course}) => (
    <TouchableOpacity
    style={styles.card}
    onPress={() => router.push (`/course/${item.id}`)}
    >
    <Text style = {styles.title}>{item.name}</Text>
    <Text style= {styles.instructor}>{item.instructor}</Text>
    </TouchableOpacity>
  );

  return(
    <View style={styles.container}>
    <FlatList
    data= {COURSES}
    keyExtractor={(item)=> item.id.toString()}
    renderItem={renderCourse}
    />
    </View>
  );
}
 const styles= StyleSheet.create({
  container:{ flex:1, backgroundColor:'#F0F0F5', paddingTop:10},
  card:{
    backgroundColor:'#1A1A40',
    padding:16,
    marginVertical: 8,
    marginHorizontal:16,
    borderRadius:8,
    borderLeftWidth:5,
    borderLeftColor:'#6A0DAD',
  },
  title:{ color:'#FFFFFF', fontSize:18, fontWeight:'bold'},
  instructor:{ color:'#D3D3D3', fontSize:14, marginTop:4},
 });