/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Button
} from 'react-native';


function App() {
 
  const {width, height} = Dimensions.get('window');
   console.warn(height);
   
  return (

    <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={-height* 0.24} behavior={"position"}>

      <View style={{ height:height *0.70, backgroundColor:'red'}}>
        
          <Text style={{ fontSize: height *0.13 }}>fjnjn</Text>
          <Text style={{ fontSize: height *0.13 }}>jjjjj</Text>
        
 
        <TextInput style={{ height: height *0.5 * 0.18, backgroundColor: 'blue', marginTop:'15%' }}></TextInput>
        <TextInput style={{ height: height *0.5* 0.18,marginTop:'2%', marginBottom: '2%',  backgroundColor: 'blue' }}></TextInput>

        <Button title="mkmkm"></Button>
        
       


      </View>
      <View style={{height:height* 0.27, backgroundColor:'pink'}}>
      <Text>mfmk</Text>
      </View>

    </KeyboardAvoidingView>



  );
};


export default App;
