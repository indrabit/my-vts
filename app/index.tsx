import { Component, ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/images/intro1.png'),
    backgroundColor: '#000',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/images/intro2.png'),
    backgroundColor: '#febe29',
  }   
]

export default function Index() {
  const renderItem = ( {item}:any) => {
    return (
      <View style={{flex:1,backgroundColor:item.backgroundColor,justifyContent:'center',alignItems:'center'}}>        
        <Image source={item.image} style={item.imageStyle} />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
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