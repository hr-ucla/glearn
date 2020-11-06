import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';
// import { firebaseConfig } from './config/firebase.js';
import Home from './pages/Home.js';
import LoginScreen from './screens/LoginScreen.js';
import LoadingScreen from './screens/LoadingScreen.js';

// firebase.initializeApp(firebaseConfig);

// const AppSwitchNavigator = createSwitchNavigator(
//   {
//     LoadingScreen: LoadingScreen,
//     Home: HomeScreen,
//     LoginScreen: LoginScreen,
//   },
//   {
//     initialRouteName: 'LoadingScreen'
//   },
// );

// const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <>
    </>
  );
}

