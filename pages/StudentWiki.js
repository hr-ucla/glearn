import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../SearchBar/Search.js'

export default function StudentWiki(props) {

  const student = [
    {
      id:"orientations",
      name: "Orientations",
    },
    {
      id:"technicalKnowledge",
      name: "Technical Knowledge",
    },
    {
      id:"guidance",
      name: "Guidance",
    },
    {
      id:"referenceResources",
      name: "Reference Resources",
    }
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
      <Text style={styles.listTitle}>Student Wiki </Text>
      <FlatList
        data ={student}
        renderItem={({item}) => (
        <TouchableOpacity>
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