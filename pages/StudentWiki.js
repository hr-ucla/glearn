import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FontAwesome, { Icons, IconTypes } from 'react-native-fontawesome';

export default function StudentWiki() {
  const [ page, setPage ] = useState('');

  const student = [
    "Orientations",
    "Technical Knowledge",
    "Guidance",
    "Reference Resources",
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>Student Wiki </Text>
      <FlatList data ={student} renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>} keyExtractor={item=>item} />
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
