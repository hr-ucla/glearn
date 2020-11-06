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
  const check =
  <Icon
    name="check-circle"
    color="#19a5b3"
    size={40}
  />;
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
          {/* <View style={styles.rightSide}>
            <Text style={styles.check}>{check}</Text>
          </View> */}
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
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f79020',
    color: '#fff',
    marginBottom:25,
  },
  listItem:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: 'white',
    marginTop:5,
    fontSize:20,
    fontWeight:"bold",
  },
  check:{
    flex: 1,
    alignItems: 'flex-end',
    marginRight: '2%',
  },
  leftSide: {
    marginLeft: '2%',
  },
  rightSide: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: '2%',
  },
});

