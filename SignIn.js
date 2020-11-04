import React, {useState} from 'react';
import { Button, Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const googleButton = (
    <Icon.Button
      name="google"
      backgroundColor="#f79020"
      color="#fff"
      size={40}
      //onPress={this.loginWithFacebook}
    >
      Login with Google
    </Icon.Button>
  );
  const githubButton = (
    <Icon.Button
      name="github"
      backgroundColor="#f79020"
      color="#fff"
      size={40}
      //onPress={this.loginWithFacebook}
    >
      Login with Github
    </Icon.Button>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./logo.png')} />
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