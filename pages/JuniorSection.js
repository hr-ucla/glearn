import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function JuniorSection() {
  const [ page, setPage ] = useState('');

  const junior = [
    "Orientation and Precourse",
    "Data Modeling and Classes",
    "Inheritance Patterns",
    "Algorithms",
    "Browser Apps, jQuery, and AJAX",
    "React",
    "Redux",
    "Servers and Node",
    "REST and CRUD",
    "Databases",
    "Authentication",
    "Mini Apps",
    "Full Stack Review",
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>Junior Section</Text>
      <FlatList
        data ={junior}
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
    fontSize:20,
  }
});
