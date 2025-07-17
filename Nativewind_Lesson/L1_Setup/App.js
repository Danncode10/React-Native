import "./global.css"
import { Text, View, Image, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { MyButton } from "./components/MyButton";
 
export default function App() {
  return (
    <View  className="flex-1 items-center bg-white p-5 mt-10">
        <MyButton label="Primary" variant="primary" onPress={() => Alert.alert("Primary text")}/>
        <MyButton label="Secondary" variant="secondary" onPress={() => Alert.alert("Secondary text")}/>
        <MyButton label="Disabled" variant="disabled" onPress={() => Alert.alert("Disabled text")}/>
        <MyButton label="Danger" variant="danger" onPress={() => Alert.alert("Danger text")}/>
        
    </View>
  );
}