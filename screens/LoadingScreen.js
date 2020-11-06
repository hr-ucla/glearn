import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';



export default function LoadingScreen(props) {
  useEffect(() => {
    checkIfLoggedIn();
  }, [])

  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        props.navigation.navigate('Home');
      } else {
        props.navigation.navigate('LoginScreen');
      }
    })
  };


  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});