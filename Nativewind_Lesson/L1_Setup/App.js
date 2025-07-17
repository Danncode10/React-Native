import "./global.css"
import { View, TextInput, Text} from 'react-native';
import { use, useState } from "react";

export default function App() {

  const [name, setName] = useState("");

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <TextInput
        className="border border-gray-400 rounded-md px-4 py-2 w-72"
        placeholder="Enter your name"
        value = {name}
        onChangeText={setName}
      />
      <Text>My name is {name}</Text>
    </View>
  );
}
