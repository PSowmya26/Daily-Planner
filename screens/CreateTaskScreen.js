import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from "firebase";
import db from '../config';

export default class CreateTaskScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      time: '',
    };
  }

  async addTask() {
    await db
      .ref('info')
      .set({
        task: this.state.task,
        time: this.state.time,
      })
      .then(function (snapshot) {});
    this.props.navigation.navigate('Feed');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image
            source={require('../assets/planner.png')}
            style={{
              width: 40,
              height: 40,
              marginRight: 1,
              marginTop: 10,
              margin: 10,
            }}
          />
          <Text style={styles.text}>Daily Planner</Text>
        </View>

        <View style={{ marginTop: 25 }}>
          <TouchableOpacity style={styles.label}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Task</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            //placeholder={'Add Task'}
           // multiline={true}
            placeholderTextColor="black"
            onChangeText={(data) => this.setState({ task: data })}
            value={this.state.task}
          />

          <TouchableOpacity style={styles.label}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Time</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            //placeholder={'Add Time'}
            placeholderTextColor="black"
            onChangeText={(data) => this.setState({ time: data })}
            value={this.state.time}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={()=>this.addTask()}>
          <Text style={styles.submitButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e5d5',
  },
  textContainer: {
    backgroundColor: '#FFBC94',
    flexDirection: 'row',
    width: 260,
    height: 60,
    borderRadius: 15,
    marginLeft: 50,
    marginTop: 20,
  },
  text: {
    color: 'white',
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  label: {
    marginTop: 25,
    width: 80,
    height: 30,
    marginLeft: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1.9,
    fontSize: 15,
    margin: 10,
    borderRadius: 0,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: '#000000',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 40,
    justifyContent: 'center',
  },
  submitButton: {
    height: 30,
    width: 90,
    borderWidth: 2,
    marginTop: 40,
    paddingTop: 5,
    borderRadius: 40,
    backgroundColor: '#FFBC94',
    marginLeft: 140,
    borderColor: 'black',
  },
  submitButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
