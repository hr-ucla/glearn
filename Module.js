import React, { useState } from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Module(props) {
  const styles = StyleSheet.create({
    moduleContainer: {
      top: '0%',
      flex: 1,
      backgroundColor: '#fff',
      textAlign: 'left',
      paddingHorizontal: 16,
    },
    moduleName: {
      color: 'rgb(68, 68, 68)',
      marginTop: 60,
      fontSize: 30
    },
    moduleText: {
      color: 'rgb(68, 68, 68)',
      fontSize: 17,
      lineHeight: 30,
      marginTop: 30,
    },
    moduleCode: {
      color: 'rgb(56, 58, 66)',
      backgroundColor: 'rgb(230, 230, 240)',
      fontSize: 12,
      lineHeight: 15,
      marginTop: 30,
      padding: 16,
      fontFamily: `Menlo`,
    },
  });

  const { moduleName, contents } = props.module;
  const listContents = contents.map((content) => {
    if (content.text) {
      return <Text key={content.id} style={styles.moduleText}>{content.text}</Text>
    } else if (content.code) {
      return <Text key={content.id} style={styles.moduleCode}>{content.code}</Text>
    }
  });


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={styles.moduleContainer}>
        <Text style={styles.moduleName}>{props.module.moduleName}</Text>
        {listContents}
      </ScrollView>
    </SafeAreaView>
  );
}
