import "./global.css"
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { MyInput } from './components/MyInput';
import { MyButton } from "./components/MyButton";
import { Keyboard, TouchableWithoutFeedback } from 'react-native';


export default function App() {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('')

  function showLogIn(){
    Alert.alert("Email: " + email + "\n" +
                "Password: " + passWord
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 justify-center items-center bg-blue-200 px-4">

      <Text className="font-bold text-4xl color-blue-800 " >Fakebook</Text>

      <MyInput
        placeholder="Email"
        value={email}
        onChange={setEmail}
      />

      <MyInput
        placeholder="Password"
        value={passWord}
        onChange={setPassWord}
        secure={true}
      />

      <MyButton label='Sign In' onPress={showLogIn}/>

    </View>
    </TouchableWithoutFeedback>
  );
}
