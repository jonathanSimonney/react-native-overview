/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Picker, Slider, Switch} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {favoriteLanguage: "reactNative", note: 10, goodMood: false}
  }

  static musicTouched(){
    Alert.alert("music touched")
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>

        <TouchableOpacity
            accessible={true}
            onPress={App.musicTouched}
            accessibilityHint="will display an alert indicating the click was detected"
        >
          <Image
            style={styles.image}
            source={require('./assets/music.jpg')}
            accessibilityLabel="picture of music note"
          />
        </TouchableOpacity>
          <Text>favorite language</Text>
        <Picker
            selectedValue={this.state.favoriteLanguage}
            onValueChange={(itemValue, _) => this.setState({favoriteLanguage: itemValue})}
            accessibilityLabel="favorite language picker"
        >
          <Picker.Item label="react native" value="reactNative"/>
          <Picker.Item label="php" value="notEvenARealLanguage"/>
          <Picker.Item label="JS" value="javascript"/>
          <Picker.Item label="french" value="someUselessHumanLanguage1"/>
          <Picker.Item label="english" value="someUselessHumanLanguage2"/>
        </Picker>
        <Text>grade</Text>
        <Slider
            accessibilityLabel="grade for the exercise"
            style={{width: 300}}
            step={1}
            minimumValue={0}
            maximumValue={20}
            value={this.state.note}
            onValueChange={val => this.setState({note: val})}
        />
        <Text>mood :</Text>
        <Switch
            onValueChange={val => this.setState({goodMood: val})}
            value={this.state.goodMood}
            accessibilityLabel="your current mood"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbfdff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    height: 50,
    width: 50
  }
});
