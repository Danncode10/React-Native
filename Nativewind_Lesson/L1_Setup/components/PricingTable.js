import { View, Text, Pressable } from 'react-native';

export function PricingTable() {

    const styles = {
        text: "text-xl md:text-2xl"
    }

  return (
    <View className="flex-col md:flex-row gap-4 p-4 h-3/4 w-full">
      {/* Header */}
    <View className="mb-8 items-center">
      <Text className="text-4xl md:text-6xl font-extrabold text-indigo-900">
        FlashLearner.ai
      </Text>
      <Text className="text-lg md:text-xl text-gray-700 mt-2 text-center">
        Boost your memory with smart AI flashcards
      </Text>
    </View>
  {/* Free Plan */}
    <View className="w-full h-[300px] bg-blue-100 border border-blue-300 rounded-2xl shadow-xl p-6 items-center justify-center gap-6">
      
      {/* Title */}
      <Text className="text-4xl md:text-6xl font-extrabold text-blue-900">Free Plan</Text>

      {/* Features */}
      <View className="gap-2 items-center">
        <Text className="text-base md:text-xl text-blue-800">50 AI-generated flashcards/month</Text>
        <Text className="text-base md:text-xl text-blue-800">1 subject limit</Text>
        <Text className="text-base md:text-xl text-blue-800">Basic AI understanding only</Text>
      </View>

      {/* Price Button */}
      <Pressable onPress={() => console.log("Free Plan")} className="active:opacity-80">
        <View className="bg-blue-900 px-6 py-3 rounded-full shadow-md">
          <Text className="text-white text-2xl md:text-4xl font-bold">FREE</Text>
        </View>
      </Pressable>

    </View>


  {/* Premium Plan */}
    <View className="w-full h-[300px] bg-green-100 border border-green-300 rounded-2xl shadow-xl p-6 items-center justify-center gap-6">
      
      {/* Title */}
      <Text className="text-4xl md:text-6xl font-extrabold text-green-900">Premium Plan</Text>

      {/* Features */}
      <View className="gap-2 items-center">
        <Text className="text-base md:text-xl text-green-800">Unlimited AI flashcards</Text>
        <Text className="text-base md:text-xl text-green-800">All subjects & decks</Text>
        <Text className="text-base md:text-xl text-green-800">Advanced memory-boosting AI</Text>
        <Text className="text-base md:text-xl text-green-800">Personalized review schedules</Text>
        <Text className="text-base md:text-xl text-green-800"> Smart reminders & progress tracking</Text>
      </View>

      {/* Price Button */}
      <Pressable onPress={() => console.log("Premium Plan")} className="active:opacity-80">
        <View className="bg-green-900 px-6 py-3 rounded-full shadow-md">
          <Text className="text-white text-2xl md:text-4xl font-bold">$9.99 / month</Text>
        </View>
      </Pressable>
    </View>


</View>
    
  );
}
