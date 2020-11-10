import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudentWiki from './StudentWiki.js';
import JuniorSection from './JuniorSection.js';
import SeniorSection from './SeniorSection.js';
import Deliverables from '../Deliverables.js';
import Orientation from './Orientation.js'
import DataModeling from './DataModeling.js';
import InheritancePatterns from './Inheritance.js';
import Module from '../Module.js';
import Search from '../SearchBar/Search.js';
import QuizContent from '../QuizContent.js'
import deliverablesData from '../dummyData/deliverablesData.js';
import valuesVSreferences from '../dummyData/valuesVSreferences.js';
import QuizDescription from '../QuizDescription.js';

console.disableYellowBox = true;

export default function Home() {
  useEffect(() => {
    axios.get(`http://localhost:3000/api/deliverables`)
      .then(results => {
        setDeliverables(results.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [ page, setPage ] = useState('home');
  const [ deliverables, setDeliverables ] = useState(null);
  const [ quizDesc, setQuizDesc ] = useState(null);
  const [ actualQuiz, setActualQuiz ] = useState(null);

  const folder =
  <Icon
    name="folder"
    color="grey"
    size={35}
  />;
  const home = [
    {
      name: "Student Wiki",
      id: "Student Wiki"
    },
    {
      name: "Junior Section",
      id: "Junior Section",
    },
    {
      name: "Senior Section",
      id: "Senior Section",
    },
    {
      name: "Toy Problems",
      id:"Toy Problems"
    },
    {
      name: "Quizzes",
      id: "Quizzes",
    }
  ]

  if (page === "Student Wiki") {
    return <StudentWiki page={page} setPage={setPage}/>  }
  if (page === "Junior Section") {
      return <JuniorSection page={page} setPage={setPage}/>  }
  if (page === "Senior Section") {
    return <SeniorSection page={page} setPage={setPage}/>  }
  if (page === "Quizzes") {
    return <Deliverables  page={page} setPage={setPage} deliverables={deliverables} quizDesc={quizDesc} setQuizDesc={setQuizDesc}/>  }
  if (page === "Orientation and Precourse") {
    return <Orientation page={page} setPage={setPage}/>  }
  if (page === "Data Modeling and Classes") {
    return <DataModeling page={page} setPage={setPage}/>  }
  if (page === "Inheritance Patterns") {
    return <InheritancePatterns page={page} setPage={setPage}/>  }
  if (page === "Exercise: Recursion Review") {
    return <Module page={page} setPage={setPage} moduleName={page}/>  }
  if (page === "Exercise: Underbar Review") {
    return <Module page={page} setPage={setPage} moduleName={page}/>  }
  if (page === "Welcome to Hack Reactor") {
    return <Module page={page} setPage={setPage} moduleName={page}/>  }
  if (page === 1) {
    return <QuizContent page={page} setPage={setPage} data={actualQuiz} quizDesc={quizDesc} setQuizDesc={setQuizDesc} deliverables={deliverables} setDeliverables={setDeliverables} />  }
  if (page === "Value vs Reference") {
    return <QuizDescription page={page} setPage={setPage} quizDesc={quizDesc} setQuizDesc={setQuizDesc} actualQuiz={actualQuiz} setActualQuiz={setActualQuiz}/>  }
  if (page === "Scope & Closures") {
    return <QuizDescription page={page} setPage={setPage} quizDesc={quizDesc} setQuizDesc={setQuizDesc}/>  }
  return (
    <View style={styles.container}>
      <Search setPage={setPage} page={page}/>
      <Text style={styles.listTitle}>  SEI - Los Angeles - August 2020 - HRLA39</Text>
      <FlatList
        data ={home}
        renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            setPage(item.name)}}>
          <View style={styles.leftSide}>
            {folder}
            <Text style={styles.listItem}>{item.name}</Text>
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
