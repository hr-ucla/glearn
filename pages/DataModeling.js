import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../SearchBar/Search.js'

export default function DataModeling(props) {

  const data = [
    {
      id:"objectOriented",
      name: "Object-Oriented Programming",
    },
    {
      id:"solutionDataStructures",
      name: "Solution: Data Structures",
    },
    {
      id:"problemSolving",
      name: "Problem Solving Process",
    },
    {
      id:"whiteboarding",
      name: "Whiteboarding",
    },
    {
      id:"classes",
      name: "JS Review: Classes",
    },
    {
      id:"complexityAnalysis",
      name: "Complexity Analysis",
    },
    {
      id:"advancedDataStructures",
      name: "Advanced Data Structures",
    },
    {
      id:"codingBestPractices",
      name: "Coding Best Practices",
    },
    {
      id:"algorithm",
      name: "Algorithm of an Algorithm",
    },
    {
      id:"hashTables",
      name: "How Hash Tables Work",
    },
    {
      id:"functions",
      name: "JS Review: Functions",
    },
    {
      id:"Callbacks",
      name: "JS Review: Callbacks",
    },
  ]
  const folder =
  <Icon
    name="folder"
    color="grey"
    size={35}
  />;

  return (
    <View style={styles.container}>
      <Search setPage={props.setPage} page={props.page}/>
      <Text style={styles.listTitle}>Orientation and Precourse</Text>
      <FlatList
        data ={data}
        renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            props.setPage(item.name)
            }}>
          <View style={styles.leftSide}>
            <Text style={styles.listItem}>{folder} {item.name}</Text>
          </View>
        </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listTitle:{
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#f79020',
    color: '#fff',
    justifyContent:"space-between",
    marginBottom:15,
  },
  listItem:{
    backgroundColor: "white",
    borderTopColor: 'white',
    fontSize:20,
    fontWeight:"bold",
    marginLeft:"2%",
  },
  leftSide: {
    alignItems:"center",
    marginLeft: '2%',
    flexDirection:"row",
    justifyContent:"flex-start",
    paddingVertical:10,
  },
});
