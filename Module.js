import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ViewPropTypes } from 'react-native-web';
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';
import { Video } from 'react-native-video';
import axios from 'axios';
import Search from './SearchBar/Search.js';

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
    code: {
      backgroundColor: 'rgb(248, 248, 248)',
      fontSize: 16,
      fontFamily: 'Menlo',
    },
    codesnippet: {
      color: 'rgb(56, 58, 66)',
      backgroundColor: 'rgb(230, 230, 240)',
      fontSize: 12,
      lineHeight: 15,
      marginTop: 30,
      marginBottom: 20,
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
    li: {
      color: 'rgb(68, 68, 68)',
      fontSize: 17,
      borderColor: 'gray',
    },
    ul: {
      marginLeft: 20,
      marginTop: 10,
      lineHeight: 22,
    },
    iframe: {
      marginTop: 20,
      width: '100%',
      height: '40%',
      backgroundColor: 'black',
    },
    WebView: {
      height: 250
    },
    loadingIcon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const [module, setModule] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/module/${props.moduleName}`)
      .then(results => {
        setModule(results.data);
      })
      .catch((err) => console.error(err));
  }, [])

  const displayVideo = () => {
    if (module.video) {
      return (
        <WebView allowsFullscreenVideo allowsInlineMediaPlayback mediaPlaybackRequiresUserAction source={{ uri: `${module.video}` }} style={styles.WebView} />
      );
    }
  };

  if (!module) {
    return (
      <View style={styles.loadingIcon}>
        <ActivityIndicator size="large" />
      </View>
    )
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Search setPage={props.setPage} page={props.page} />
        <ScrollView style={styles.moduleContainer}>
          <Text style={styles.moduleName}>{module.moduleName}</Text>
          <HTMLView value={module.content} stylesheet={styles} />
          {displayVideo()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
