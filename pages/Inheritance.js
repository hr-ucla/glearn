import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JuniorSection from './JuniorSection';

export default function InheritancePatterns() {
    const [ page, setPage ] = useState('');
    const [ previous, setPrevious ] = useState('');

  const inheritance = [
    {
      id:"beesBeesBees",
      name: "Exercise: BeesBeesBees",
    },
    {
      id:"subClassDanceParty",
      name: "Exercise: Subclass Dance Party",
    },
    {
      id:"solutionSubclass",
      name: "Solution: Subclass Dance Party",
    },
    {
      id:"6ees6ees6ees",
      name: "Exercise: 6ees6ees6ees",
    },
    {
      id:"introSubclass",
      name: "Intro to Subclass Dance Party",
    },
    {
      id:"tDD",
      name: "Test Driven Development",
    },
    {
      id:"functionalSubclasses",
      name: "Functional Subclasses",
    },
    {
      id:"pseudoclassicalSubclasses",
      name: "Pseudoclassical Subclasses",
    },
    {
      id:"hTMLCSSjQuery",
      name: "HTML, CSS, and jQuery",
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
        data ={inheritance}
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
