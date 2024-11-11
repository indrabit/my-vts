import { Component, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppIntroSlider from 'react-native-app-intro-slider';
type item={
    key:number;
    title:string;
    text:string;
    image:string;
    backgroundColor:string;
}
const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../assets/images/intro1.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../assets/images/intro2.png'),
      backgroundColor: '#febe29',
    }   
  ]
const IntroSlider=()=>{
    const renderItem = ( {item}:any) => {
        return (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
      const onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        
      }

    return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone}/>
    
}
export default IntroSlider;
const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image: {
      width: 320,
      height: 320,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 22,
      color: 'white',
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginBottom: 16,
    },
  });
  