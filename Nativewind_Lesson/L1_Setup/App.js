import "./global.css"
import { Text, View, Image, SafeAreaView } from "react-native";
import { Box } from "./components/Box";
 
export default function App() {
  const intensity = '100'
  const boxColor = `bg-blue-${intensity}`
  
  const styles = {
    notPhoneScreen: "md:flex-row lg:flex-row xl:flex-row",
  }

  return (
    <View className="flex-1 items-center justify-center bg-white p-5">

      
      <View className={`flex-col ${styles.notPhoneScreen}`}>
        <Box />
        <Box />
      </View>


      <View className="border border-red-900 h-1/2 w-1/2 justify-center">
        <Box />
        <Box />
        <Box />
      </View>

      <View className="mt-10 flex-row gap-4">
        <Text className="text-4xl">🍕</Text>
        <Text className="text-4xl">🌮</Text>
        <Text className="text-4xl">🍣</Text>
      </View>

    </View>
  );
}