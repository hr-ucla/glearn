import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { render } from 'react-dom';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudentWiki from './StudentWiki.js';
import JuniorSection from './JuniorSection.js';
import SeniorSection from './SeniorSection.js';
import Deliverables from '../Deliverables.js';

export default function Home() {
  const [ page, setPage ] = useState('');
  const [ previous, setPrevious ] = useState('');
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
  const home = [
    {
      id:"studentWiki",
      name: "Student Wiki",
    },
    {
      id:"junior",
      name: "Junior Section",
    },
    {
      id:"senior",
      name: "Senior Section",
    },
    {
      id:"toyProblems",
      name: "Toy Problems",
    },
    {
      id:"quizzes",
      name: "Quizzes",
    }
  ]
  if (page === "studentWiki") {
    return <StudentWiki  />  }
  if (page === "junior") {
      return <JuniorSection  />  }
  if (page === "senior") {
    return <SeniorSection />  }
  if (page === "quizzes") {
    return <Deliverables  />  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>  SEI - Los Angeles - August 2020 - HRLA39</Text>
      <FlatList
        data ={home}
        renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            setPrevious("home")
            setPage(item.id),
            console.log(page)}}>
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
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f79020',
    color: '#fff',
    justifyContent:"space-between",
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
