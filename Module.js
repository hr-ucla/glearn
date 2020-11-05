import React, { useState } from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';

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
      marginBottom: 30,
      fontSize: 30
    },
    text: {
      color: 'rgb(68, 68, 68)',
      fontSize: 17,
      lineHeight: 30,
      marginTop: 10,
    },
    codesnippet: {
      color: 'rgb(56, 58, 66)',
      backgroundColor: 'rgb(230, 230, 240)',
      fontSize: 12,
      lineHeight: 15,
      marginTop: 30,
      padding: 16,
      fontFamily: `Menlo`,
    },
    title1: {
      color: 'rgb(68, 68, 68)',
      fontSize: 23,
      fontWeight: 'bold',
      lineHeight: 30,
      marginTop: 30,
    },
    title2: {
      color: 'rgb(68, 68, 68)',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 30,
      marginTop: 30,
    },
  });

  const { moduleName, content } = props.module;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.moduleContainer}>
        <Text style={styles.moduleName}>{moduleName}</Text>
        <HTMLView value={content} stylesheet={styles}/>
      </ScrollView>
    </SafeAreaView>
  );
}
