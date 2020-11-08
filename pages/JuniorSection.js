import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../SearchBar/Search.js'


export default function JuniorSection(props) {
  const junior = [
    {
      id:"orientationPrecourse",
      name: "Orientation and Precourse",
    },
    {
      id:"dataModeling",
      name: "Data Modeling and Classes",
    },
    {
      id:"inheritance",
      name: "Inheritance Patterns",
    },
    {
      id:"algorithms",
      name: "Algorithms",
    },
    {
      id:"browserApps",
      name: "Browser Apps, jQuery, and AJAX",
    },
    {
      id:"react",
      name: "React",
    },
    {
      id:"redux",
      name: "Redux",
    },
    {
      id:"node",
      name: "Servers and Node",
    },
    {
      id:"restCrud",
      name: "REST and CRUD",
    },
    {
      id:"databases",
      name: "Databases",
    },
    {
      id:"authentication",
      name: "Authentication",
    },
    {
      id:"miniApps",
      name: "Mini Apps",
    },
    {
      id:"fullstack",
      name: "Full Stack Review",
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
      <Text style={styles.listTitle}>Junior Section</Text>
      <FlatList
        data ={junior}
        renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            if (item.name === "Orientation and Precourse" || item.name === "Data Modeling and Classes"|| item.name === "Inheritance Patterns" ){
            props.setPage(item.name)
            }
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