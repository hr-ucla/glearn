import React, {useState} from 'react';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const moreData = {
  hello: `var eat = function(meal){\n  console.log('meal before bite:', meal);\n  console.log('now eating', meal.pop());\n  if(meal.length){\n    eat(meal);\n  } else {\n    console.log('done with the meal!');\n  }\n}`
}

const Question = ({ item, onPress, style }) => (
  <View style={styles.container}>
    <View style={styles.flexboxRow}>
      <View style={styles.questionNum}>
        <Text style={styles.number}>1</Text>
      </View>
      <Text style={styles.question}>What message will eventually be alerted? After how long?</Text>
    </View>
    <Text style={styles.code}>{moreData.hello}</Text>
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
    <View style={styles.bottom}>
      <View style={styles.flexboxRow}>
        {correct}
        <Text style={styles.text}>Correct</Text>
      </View>
      <View style={styles.flexboxRow}>
        <TouchableOpacity onPress={onPress} style={styles.checkAnswer}>
          <Text style={styles.checkAnswerText}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.checkAnswer}>
          <Text style={styles.checkAnswerText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function QuizContent() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#19a5b3";

    return (
      <Question
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.background}>
        <FlatList
          data={DATA}
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: '4%',
    marginTop: '6%',
    paddingBottom: 20,
    borderBottomWidth: 20,
    borderColor: 'rgb(230, 230, 240)',
  },
  flexboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
    width: '80%',
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
    backgroundColor: 'rgb(230, 230, 240)',
    fontSize: 15,
    lineHeight: 15,
    marginVertical: '3%',
    padding: 16,
    fontFamily: `Menlo`,
  },
  bottom: {
    borderTopWidth: 2,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkAnswer: {
    backgroundColor: '#19a5b3',
    width: 100,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
  },
  checkAnswerText: {
    color: '#fff',
  }
});