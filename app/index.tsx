import { useRouter } from "expo-router";
import { Component, ReactNode } from "react";

import { Dimensions, Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import img from '../assets/img';

import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
const slides = [
  {
    key: 1,
    title: 'Asessment without barriers',
    text:'Record obersvations and asessment data during face-to-face training sessions, even in remote locations',
    icon: 'ios-images-outline',
    colors: [colors.yellowIndigenous, colors.blackIndigenous],
    image:img.intro1,
    start:{ x: 0.5, y: 0.1 },
    size:{height:320,width:320}
  },
  {
    key: 2,
    title: 'Streamline on-site assessments',
    text:'From practical skills verification to safety inspections -document every in-person assessment',
    icon: 'ios-options-outline',
    colors: [colors.blueIndigenous, colors.black],
    image:img.assessment,
    start:{ x: 0, y: 0.1 },
    size:{height:320,width:320}
  },
  {
      key: 3,
      title: 'Real-time assessment tracking',
      text:'Give organizations clear visibility into completed face-to-face assessments and training',
      icon: 'ios-options-outline',
      colors: [colors.yellowIndigenous, colors.redIndigenous],
      image:img.intro3,
      start:{ x: 0.5, y: 0.1 },
      size:{height:320,width:320}
    },
 
];

export default function Index() {
  const navigation=useRouter();
  
  const renderItem = ( {item}:any) => {
    return (
      <View style={{flex:1,backgroundColor:item.backgroundColor,justifyContent:'center',alignItems:'center'}}>        
        <Image source={item.image} style={item.imageStyle} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  const onDone = () => {  
    navigation.navigate('(tabs)')
  }

  const renderSlide=({item}:any)=>{
    return(<LinearGradient
        style={[
          styles.mainContent,  
          {
            height:'100%',
          }           
          ,
        ]}
        colors={item.colors}
        start={item.start}
        end={{ x: 0.1, y: 1 }}
      >        
        <Image source={img.logo}  style={{height:50 ,top:0,left:0,marginVertical:10}} resizeMode='contain'/>                
        <Image source={item.image} style={[item.size,{backgroundColor:'transparent',marginVertical:50}]} resizeMode='contain' />            
        <View style={{marginVertical:50}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>          
        </View>                                                    
    </LinearGradient>
    )      
}
const renderDoneButton = () => {
    return (
        <TouchableOpacity onPress={onDone}
            style={styles.doneButton}>
            <Text style={styles.doneButtonText}>
                Start
            </Text>
        </TouchableOpacity>
    );
};

return <AppIntroSlider          
renderItem={renderSlide}
data={slides}
onDone={onDone}            
nextLabel='Next'
prevLabel='Prev'
showSkipButton={true} 
renderDoneButton={renderDoneButton}          
activeDotStyle={{ backgroundColor: "#A30808" }}
dotStyle={{ backgroundColor: "#A3080833" }}
onScroll={({nativeEvent})=>{
    const diff=nativeEvent.contentOffset.x-Dimensions.get('window').width*2;
    if(Platform.OS=="android"){
        if(diff-1>0) onDone();
    }else{
        if(diff>0) onDone()
    }
}}
bounces
/>

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButton: {
    // Background color for the "Done" button
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
},
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
},
background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  mainContent: {        
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});