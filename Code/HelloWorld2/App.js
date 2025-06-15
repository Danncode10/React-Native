// Exercise

import { Button, View, StatusBar } from "react-native";
import { useState } from "react";

export default function App(){

  const [barText, setBarText] = useState('default');
  const [isHidden, setIsHidden] = useState(false);
  const [bgColor, setBgColor] = useState('lightblue');

  return(
    <View style={{backgroundColor:bgColor, flex:1, padding:60}}>


      <StatusBar barStyle={barText} hidden={isHidden}>

      </StatusBar>


      <Button title="light" onPress={() => {
        setBarText("light-content")
      }}/>
      <Button title="dark" onPress={() => {
        setBarText("dark-content")
        }}/>
      <Button title="hide"onPress={() => {
         setIsHidden(true);
        }}/>
      <Button title="unHide"onPress={() => {
         setIsHidden(false);
        }}/>
      <Button title="Dark Mode"onPress={() => {
        setBgColor('black');
        setBarText("light-content")
        setIsHidden(false);
        }}/>
      <Button title="Light Mode"onPress={() => {
        setBgColor('lightblue');
        setBarText("dark-content")
        setIsHidden(false);
        }}/>
    </View>
  );
}