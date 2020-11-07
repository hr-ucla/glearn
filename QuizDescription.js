import React, {useState} from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Search setPage={props.setPage} page={props.page}/>
      <View style={styles.container}>
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
            props.setPage(props.quizDesc.id)
          }
          style={styles.start}
        >
          <Text style={styles.startText}>Start Assessment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '0%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logistics: {
    marginTop: '2%',
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
    marginTop: '6%',
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