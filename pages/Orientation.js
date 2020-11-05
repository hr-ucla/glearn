import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JuniorSection from './JuniorSection';

export default function Orientation(props) {
    const [ page, setPage ] = useState('');
    const [ previous, setPrevious ] = useState('');

  const orientation = [
    {
      id:"recursionReview",
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


  if (page === "recursionReview") {
    return <Orientation />  }
  if (page === "junior") {
        return <JuniorSection />  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>Orientation and Precourse</Text>
      <TouchableOpacity
        onPress={() => {
            setPage("junior"),
            console.log(page)}}>
        <Text>BACK </Text>
      </TouchableOpacity>
      <FlatList
        data ={orientation}
        renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
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

