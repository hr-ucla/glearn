import React, {useState} from 'react';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from './SearchBar/Search.js';

const correct =
    <Icon
      name="check"
      color="#19a5b3"
      size={40}
    />;

const incorrect =
    <Icon
      name="close"
      color="#ff0400"
      size={40}
    />;

const initialState = {
  '1': null,
  '2': null,
  '3': null,
  '4': null,
  '5': null,
  '6': null,
  '7': null,
  '8': null,
  '9': null,
  '10': null,
}

export default function QuizContent(props) {
  const [selectedId, setSelectedId] = useState(initialState);
  const [determineCorrect, setDetermineCorrect] = useState(initialState);


  const renderItem = ({ item }) => {


    const choices = item.multipleChoice.map((choice, index) => {
      const backgroundColor = choice.id === selectedId[item.questionId.toString()] ? "#19a5b3" : "rgb(230, 230, 240)";
      return (
        <TouchableOpacity
          key={index}
          onPress={() =>
            setSelectedId(prevState => ({
              ...prevState,
              [item.questionId.toString()]: choice.id
            }))
          }
          style={[styles.item, {backgroundColor}]}
        >
          <Text key={index} style={styles.text}>{choice.choice}</Text>
        </TouchableOpacity>
      );
    });

    let determine;
    if (determineCorrect[item.questionId.toString()]) {
      determine =
      <View style={styles.flexboxColumn}>
        {correct}
        <Text style={styles.text}>Correct</Text>
      </View>
    } else if (determineCorrect[item.questionId.toString()] === false) {
      determine =
      <View style={styles.flexboxColumn}>
        {incorrect}
        <Text style={styles.text}>Err, try again...</Text>
      </View>
    } else {
      determine =
      <View style={styles.flexboxColumn}>
      </View>
    }


    return (
      <View style={styles.container}>
        <View style={styles.flexboxRow}>
          <View style={styles.questionNum}>
            <Text style={styles.number}>{item.questionId}</Text>
          </View>
          <Text style={styles.question}>{item.question}</Text>
        </View>
        <Text style={styles.code}>{item.code}</Text>
        {choices}
        <View style={styles.bottom}>
          {determine}
          <TouchableOpacity
            onPress={() =>
              setSelectedId(prevState => ({
                ...prevState,
                [item.questionId.toString()]: null,
              }))
            }
            style={styles.resetInput}
          >
            <Text style={styles.resetInputText}>RESET</Text>
            <Text style={styles.resetInputText}>INPUT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            selectedId[item.questionId.toString()] === item.answerId ?
            setDetermineCorrect(prevState => ({
              ...prevState,
              [item.questionId.toString()]: true,
            })) :
            setDetermineCorrect(prevState => ({
              ...prevState,
              [item.questionId.toString()]: false,
            }))
            }}
            style={styles.checkAnswer}
          >
            <Text style={styles.checkAnswerText}>CHECK</Text>
            <Text style={styles.checkAnswerText}>ANSWER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Search setPage={props.setPage} page={props.page}/>
      <View style={styles.background}>
        <FlatList
          data={props.data.questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgb(230, 230, 240)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: '4%',
    marginVertical: '6%',
    marginTop: '6%',
    paddingBottom: 20,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  flexboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexboxColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'rgb(230, 230, 240)',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
  questionNum: {
    width: 40,
    height: 40,
    color: '#fff',
    backgroundColor: '#f79020',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: '#fff',
    fontSize: 20,
  },
  question: {
    marginLeft: '2%',
    fontSize: 15,
    fontWeight: 'bold',
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#19a5b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#19a5b3',
  },
  code: {
    color: 'rgb(56, 58, 66)',
    backgroundColor: '#f8f8f8',
    fontSize: 15,
    lineHeight: 15,
    marginVertical: '3%',
    padding: 16,
    fontFamily: `Menlo`,
  },
  bottom: {
    paddingTop: '5%',
    paddingRight: '2%',
    marginTop: '3%',
    borderTopWidth: 2,
    borderColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  checkAnswer: {
    flex: 1,
    backgroundColor: '#19a5b3',
    paddingVertical: 10,
    borderRadius: 30,
  },
  checkAnswerText: {
    color: '#fff',
    textAlign: 'center',
  },
  resetInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#19a5b3',
  },
  resetInputText: {
    color: '#19a5b3',
    textAlign: 'center',
  }
});