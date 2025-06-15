import { Button, View, StatusBar } from "react-native";
import { useState } from "react";

export default function App(){

  const [barText, setBarText] = useState('default');
  const [isHidden, setIsHidden] = useState(false);

  return(
    <View style={{backgroundColor: 'lightblue', flex:1, padding:60}}>


      <StatusBar barStyle={barText} hidden={isHidden}>

      </StatusBar>


      <Button title="light" onPress={() => {
        setBarText("light-content")
        setIsHidden(false);
      }}/>
      <Button title="dark" onPress={() => {
        setBarText("dark-content")
         setIsHidden(false);
        }}/>
      <Button title="hide"onPress={() => {
         setIsHidden(true);
        }}/>
      <Button title="unHide"onPress={() => {
         setIsHidden(false);
        }}/>
    </View>
  );
}