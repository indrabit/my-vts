import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Speech from 'expo-speech';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  const [transcribedSpeech, setTranscribedSpeech] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const speak = () => {
    const thingToSay = 'Indra';
    Speech.speak(thingToSay);

  };
  const startRecording = async () => {
    setIsRecording(true);
    
  };

  const stopRecording = async () => {
    setIsRecording(false);
    setIsTranscribing(true);
    try {
     
      
    } catch (e) {
      console.error(e);
    } finally {
      setIsTranscribing(false);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:28}}>Tab[Home]</Text>
      <Button title="Press to hear some words" onPress={speak} />
      <View style={styles.transcriptionContainer}>
            {isTranscribing ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Text
                style={{
                  ...styles.transcribedText,
                  color: transcribedSpeech ? "#000" : "rgb(150,150,150)",
                }}
              >
                {transcribedSpeech ||
                  "Your transcribed text will be shown here"}
              </Text>
            )}
          </View>
      <TouchableOpacity
      style={{
        ...styles.microphoneButton,
        opacity: isRecording || isTranscribing ? 0.5 : 1,
      }}
      >
      {isRecording ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <FontAwesome name="microphone" size={40} color="white"
      
        onPressIn={startRecording}
        onPressOut={stopRecording}
        disabled={isRecording || isTranscribing}
      />
            )}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  microphoneButton: {
    backgroundColor: "red",
    width: 75,
    height: 75,
    marginTop: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  
  transcriptionContainer: {
    backgroundColor: "rgb(220,220,220)",
    width: "100%",
    height: 300,
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  transcribedText: {
    fontSize: 20,
    padding: 5,
    color: "#000",
    textAlign: "left",
    width: "100%",
  },
})