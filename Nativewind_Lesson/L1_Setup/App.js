import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  const intensity = '100'
  const boxColor = `bg-blue-${intensity}`

  return (
    <View className="flex-1 items-center justify-center bg-white">

      <Text className="text-xl font-semibold text-center text-blue-600 uppercase underline">
        Welcome to My App!
      </Text>

      
      <View className={`w-60 h-60 ${boxColor} items-center justify-center`}>
        <Text className="line-through text-xl text-red-500 font-bold">Error</Text>
        <Text className="text-xl text-green-600 font-light">Success</Text>
        <Text className="underline text-xl text-gray-500 ">Secondary Info</Text>

      </View>

    </View>
  );
}