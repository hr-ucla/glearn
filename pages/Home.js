import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
  const [ page, setPage ] = useState('');

  const home = [
    "Student Wiki",
    "Junior Phase",
    "Senior Phase",
    "Toy Problems",
    "Quizzes",
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>  SEI - Los Angeles - August 2020 - HRLA39</Text>
      <FlatList
        data ={home}
        renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => console.log("clicked")}>
          <Text style={styles.listItem}>{item}</Text>
        </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  listTitle:{
    fontWeight:"bold",
    width:"100%",
    marginTop:30,
    marginBottom:40,
    fontSize: 20,
  },
  listItem:{
    margin:10,
    padding:10,
    fontWeight:"bold",
    width:"100%",
    fontSize:30,
  }
});
