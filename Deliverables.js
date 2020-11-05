import React, {useState} from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search1 from './SearchBar/Search1.js'

const check =
  <Icon
    name="check-circle"
    color="#19a5b3"
    size={40}
  />;

// const data = deliverablesData.map((week, index) => {
//   return {title: week.title, data: week.data}
// });

export default function Deliverables(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Search1 setPage={props.setPage} page={props.page}/>
      <SectionList
          sections={[
            {title: 'Week 1', data: ['Value vs Reference', 'Scope & Closures', 'Keyword "this"', 'Classes', 'Prototypes', 'Keyword "new"']},
            {title: 'Week 2', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 3', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 4', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 5', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 6', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Solo Week', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 7', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 8', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 9', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 10', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
            {title: 'Week 11', data: ['<Add Quiz Here>', '<Add Quiz Here>','<Add Quiz Here>']},
            {title: 'Week 12', data: ['<Add Quiz Here>', '<Add Quiz Here>', '<Add Quiz Here>']},
          ]}
          renderItem={({item}) =>
            <TouchableOpacity
              onPress={item.id}
              style={styles.item}
            >
              <View style={styles.leftSide}>
                <Text style={styles.deliverables}>{item}</Text>
                <Text style={styles.description}>Due Date: 11/3/2020</Text>
              </View>
              <View style={styles.rightSide}>
                <View style={styles.top}>
                  <Text style={styles.percentage}>90%</Text>
                  {check}
                </View>
                <Text style={styles.description}>9/10</Text>
              </View>
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