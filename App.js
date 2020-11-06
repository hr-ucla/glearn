import React, { useState, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';
import { firebaseConfig } from './config/firebase.js';
import SignIn from './SignIn.js';
import Deliverables from './Deliverables.js';
import QuizDescription from './QuizDescription.js';
import QuizContent from './QuizContent.js';
import Module from './Module.js';
// import sampleModule from './moduleData.js';
import Home from './pages/Home.js';
import deliverablesData from './deliverablesData.js';
import LoginScreen from './screens/LoginScreen.js';
import LoadingScreen from './screens/LoadingScreen.js';

firebase.initializeApp(firebaseConfig);

const AppSwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen: LoadingScreen,
    Home: Home,
    LoginScreen: LoginScreen,
  },
  {
    initialRouteName: 'LoadingScreen'
  },
);

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

