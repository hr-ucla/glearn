import React, { Component, useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';
import Expo from 'expo';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const googleButton = (
    <Icon.Button
      onPress={() => signInWithGoogleAsync()}
      name="google"
      backgroundColor="#f79020"
      color="#fff"
      size={40}
    >
      Login with Google
    </Icon.Button>
  );
  const githubButton = (
    <Icon.Button
      onPress={() => signInWithGithubAsync()}
      name="github"
      backgroundColor="#f79020"
      color="#fff"
      size={40}
    >
      Login with Github
    </Icon.Button>
  );

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            if (result.additionalUserInfo.isNewUser) {
              firebase
                .database()
                .ref('users/' + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.profile_picture,
                  locale: result.additionalUserInfo.profile.locale,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  created_at: Date.now()
                })
            } else {
              firebase
                .database()
                .ref('/users/' + result.user.uid)
                .update({
                  last_logged_in: Date.now()
                })
            }
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  };

  const signInWithGoogleAsync = async() => {
    try {
      const result = await Google.logInAsync({
        iosClientId: '309263535474-64241a59m9gq05k6f6dgon4b7pqhmrds.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  const signInWithGithubAsync = async() => {
    try {
      const result = await Google.logInAsync({
        iosClientId: '309263535474-64241a59m9gq05k6f6dgon4b7pqhmrds.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../logo.png')} />
      <Text style={styles.text}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}
      />
      <View style={styles.remember}>
        <Text style={styles.rememberText}>Remember me?</Text>
        <Switch
          trackColor={{ false: '#fff', true: '#00ff00'}}
          ios_backgroundColor={isEnabled ? '#00ff00' : '#fff'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity
        style={styles.signIn}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <Button
          title="Forgot your password?"
          color="#19a5b3"
      />
      <View style={styles.break}></View>
      {googleButton}
      <View style={styles.empty}></View>
      {githubButton}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '0%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '10%',
    width: '90%',
    resizeMode: 'contain',
  },
  text: {
    marginBottom: '2%',
    fontSize: 30
  },
  input: {
    marginTop: '2%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    height: '6%',
    fontSize: 20,
    width: '80%',
    textAlign: 'center',
  },
  remember: {
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '80%',
  },
  rememberText: {
    marginRight: '2%',
  },
  signIn: {
    marginTop: '3%',
    marginBottom: '2%',
    backgroundColor: '#19a5b3',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
  },
  signInText: {
    fontSize: 20,
    color: '#fff',
  },
  break: {
    borderTopWidth: 2,
    borderTopColor: '#000',
    width: '80%',
    marginTop: '4%',
    marginBottom: '4%',
  },
  empty: {
    height: '1%',
  }
});