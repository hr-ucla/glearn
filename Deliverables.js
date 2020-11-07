import React, {useState} from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from './SearchBar/Search.js';

const check =
  <Icon
    name="check-circle"
    color="#19a5b3"
    size={40}
  />;

export default function Deliverables(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Search setPage={props.setPage} page={props.page}/>
      <SectionList
          sections={props.deliverables}
          renderItem={({item}) =>
            <TouchableOpacity
              onPress={() => {
                props.setQuizDesc(item);
                props.setPage(item.title);
              }}
              style={styles.item}
            >
              <View style={styles.leftSide}>
                <Text style={styles.deliverables}>{item.title}</Text>
                <Text style={styles.description}>Due Date: {item.dueDate}</Text>
              </View>
              {item.completed ?
                <View style={styles.rightSide}>
                  <View style={styles.top}>
                    <Text style={styles.percentage}>{item.percentage}%</Text>
                    {check}
                  </View>
                  <Text style={styles.description}>{item.numOfCorrect}/{item.numOfQuestions}</Text>
                </View>
                  :
                <View style={styles.rightSide}></View>
              }
            </TouchableOpacity>
          }
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'white',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#f79020',
    color: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    backgroundColor: "#dddddd",
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  leftSide: {
    marginLeft: '2%',
  },
  deliverables: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    fontWeight: '200',
  },
  percentage: {
    fontSize: 22,
    marginRight: '2%',
    fontWeight: '500',
  },
  rightSide: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: '2%',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})