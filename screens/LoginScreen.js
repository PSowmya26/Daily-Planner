import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          this.props.navigation.navigate('Feed');
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("user dosen't exists");
            console.log("doesn't exist");
            break;
          case 'auth/invalid-email':
            alert('incorrect email or password');
            console.log('invaild');
            break;
        }
      }
    } else {
      alert('enter email and password');
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <KeyboardAvoidingView style={{ alignItems: 'center', marginTop: 20 }}>
          <View>
            <Image
              source={require('../assets/planner.png')}
              style={{ width: 200, height: 200 }}
            />
            <Text
              style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
              Daily Planner
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />

            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              placeholder="Enter Password"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 90,
                borderWidth: 1,
                marginTop: 20,
                paddingTop: 5,
                borderRadius: 40,
                backgroundColor: '#f5e5d5',
              }}
              onPress={() => {
                this.login(this.state.emailId, this.state.password);
              }}>
              <Text style={{ textAlign: 'center' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width: 220,
    height: 40,
    borderWidth: 1.9,
    fontSize: 15,
    margin: 10,
    borderRadius: 15,
    paddingLeft: 10,
    backgroundColor: '#bbdaf2',
    borderColor: '#000000',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
