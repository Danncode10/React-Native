import "./global.css"
import { View, SafeAreaView, Text } from "react-native";
import { FeedCard } from "./components/FeedCard";

export default function App() {
  return (
      <View className="bg-blue-100 flex-1">
        <SafeAreaView>
           <Text>Test</Text>
        </SafeAreaView>   
      </View>
       
  );
}
