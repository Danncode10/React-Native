import { View, Text, Pressable } from 'react-native';

export function PricingTable() {

    const styles = {
        text: "text-xl md:text-2xl"
    }

  return (
    <View className="flex-col md:flex-row gap-4 p-4 h-2/3 w-full">
  {/* Free Plan */}
  <View className="flex-1 items-center justify-center gap-4 bg-blue-100 border border-blue-300 rounded-xl shadow-lg">
    <Text className="text-4xl text-blue-900 md:text-6xl">Free Plan</Text>
    <View className="items-center justify-center">
      <Text className="text-xl md:text-2xl">Lorem ipsum dolor sit amet</Text>
      <Text className="text-xl md:text-2xl">Consectetur adipiscing elit</Text>
      <Text className="text-xl md:text-2xl">Sed do eiusmod tempor</Text>
    </View>
    <Pressable onPress={() => console.log("Free Plan")}>
      <View className="bg-blue-900 rounded-lg p-2 shadow-lg">
        <Text className="text-4xl text-blue-100 md:text-5xl">0$/month</Text>
      </View>
    </Pressable>
  </View>

  {/* Premium Plan */}
  <View className="flex-1 items-center justify-center gap-4 bg-green-100 border border-green-300 rounded-xl shadow-lg">
    <Text className="text-4xl text-green-900 md:text-6xl">Premium Plan</Text>
    <View className="items-center justify-center">
      <Text className="text-xl md:text-2xl">Lorem ipsum dolor sit amet</Text>
      <Text className="text-xl md:text-2xl">Consectetur adipiscing elit</Text>
      <Text className="text-xl md:text-2xl">Sed do eiusmod tempor</Text>
    </View>
    <Pressable onPress={() => console.log("Premium Plan")}>
      <View className="bg-green-900 rounded-lg p-2 shadow-lg">
        <Text className="text-4xl text-green-100 md:text-5xl">9.99$/month</Text>
      </View>
    </Pressable>
  </View>
</View>
    
  );
}
