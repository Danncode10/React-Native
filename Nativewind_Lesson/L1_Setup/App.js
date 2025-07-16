import "./global.css"
import { Text, View, Image, SafeAreaView } from "react-native";
import { PricingTable } from "./components/PricingTable";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-5">
      <PricingTable />

    </View>
  );
}