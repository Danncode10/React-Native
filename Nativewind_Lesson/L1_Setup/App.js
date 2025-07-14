import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  const intensity = '100'
  const boxColor = `bg-blue-${intensity}`

  return (
    <View className="flex-1 items-center justify-center bg-white">
      
      <View className={`w-60 h-60 ${boxColor} items-center justify-center`}>
        <Text className="text-red-500">Error</Text>
        <Text className="text-green-600">Success</Text>
        <Text className="text-gray-500">Secondary Info</Text>

      </View>

    </View>
  );
}