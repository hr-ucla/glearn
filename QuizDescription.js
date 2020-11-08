import React, {useState} from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import Search from './SearchBar/Search.js';
import Icon from 'react-native-vector-icons/Fontisto';

export default function QuizDescription(props) {
  const questions =
    <Icon
      name="question"
      color="#f79020"
      size={40}
    />;
  const time =
    <Icon
      name="stopwatch"
      color="#f79020"
      size={40}
    />;
  const attempts =
    <Icon
      name="unlocked"
      color="#f79020"
      size={40}
    />;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Search setPage={props.setPage} page={props.page}/>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Checkpoint: {props.quizDesc.title}</Text>
          <View>
            <View style={styles.logistics}>
              {questions}
              <Text style={styles.info}>{props.quizDesc.numOfQuestions} Questions</Text>
            </View>
            <View style={styles.logistics}>
              {time}
              {props.quizDesc.timeLimit ?
                <Text style={styles.info}>{props.quizDesc.timeLimit} min.</Text> :
                <Text style={styles.info}>No Time Limit</Text>
              }
            </View>
            <View style={styles.logistics}>
              {attempts}
              {props.quizDesc.numOfAttempts === 'unlimited' ?
                <Text style={styles.info}>Unlimited Attempts Remaining</Text> :
                <Text style={styles.info}>{props.quizDesc.numOfAttempts} Attempts Remaining</Text>
              }
            </View>
          </View>
          <Text style={styles.description}>{props.quizDesc.description}</Text>
          <TouchableOpacity
            onPress={() =>
              axios.get(`http://localhost:3000/api/quiz/${props.quizDesc.id}`)
                .then(results => {
                  props.setActualQuiz(results.data);
                  props.setPage(props.quizDesc.id)
                })
                .catch((err) => console.error(err))
            }
            style={styles.start}
          >
            <Text style={styles.startText}>Start Assessment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '0%',
    flex: 1,
    backgroundColor: 'rgb(230, 230, 240)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    borderRadius: 10,
  },
  logistics: {
    marginTop: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  info: {
    marginLeft: '2%',
    fontSize: 20,
    fontWeight: '500',
  },
  description: {
    fontWeight: '200',
    fontSize: 18,
    width: '80%',
    marginTop: '12%',
    marginBottom: '5%',
  },
  start: {
    marginTop: '6%',
    backgroundColor: '#19a5b3',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
  },
  startText: {
    fontSize: 20,
    color: '#fff',
  },
});