import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../SearchBar/Search.js'

export default function Orientation(props) {
  const orientation = [
    {
      id:"Exercise: Recursion Review",
      name: "Exercise: Recursion Review",
    },
    {
      id:"underbar",
      name: "Exercise: Underbar Review",
    },
    {
      id:"welcome",
      name: "Welcome to Hack Reactor",
    },
    {
      id:"lifeAtHackReactor",
      name: "Life at Hack Reactor",
    },
    {
      id:"gitWorkflow",
      name: "Git Workflow Pairs",
    },
    {
      id:"effectivePairing",
      name: "Effective Pairing and Feedback",
    },
    {
      id:"debugging",
      name: "Debugging Tools",
    },
    {
      id:"succeed",
      name: "How to Succeed",
    },
    {
      id:"javascriptReview1",
      name: "JavaScript Revew Part 1",
    },
    {
      id:"javascriptReview2",
      name: "JavaScript Review Part 2",
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
        data ={orientation}
        renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            props.setPage(item.name)}}>
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