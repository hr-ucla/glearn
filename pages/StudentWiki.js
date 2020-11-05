import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>Student Wiki </Text>
      <TouchableOpacity
        onPress={() => {
            props.setPage("home"),
            console.log(props.page)}}>
        <Text>BACK </Text>
      </TouchableOpacity>
      <FlatList
        data ={student}
        renderItem={({item}) => (
        <TouchableOpacity>
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
    </SafeAreaView>
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
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#f79020',
    color: '#fff',
    marginBottom: 25,
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
