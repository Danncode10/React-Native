import "./global.css";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import PokemonList from './data.json';

export default function App() {
  // 💡 Function that returns a Tailwind background class based on type
  function getColorClass(type) {
    const colorMap = {
      Water: "bg-blue-300",
      Fire: "bg-red-300",
      Grass: "bg-green-300",
      Electric: "bg-yellow-300",
      Psychic: "bg-purple-300",
      Rock: "bg-gray-300",
      Ground: "bg-amber-300",
      Bug: "bg-lime-300",
      Normal: "bg-zinc-300",
    };

    return colorMap[type] || "bg-slate-300"; // fallback
  }

  // 🖌️ Function to render each Pokémon item
  const renderPokemonCard = ({ item }) => {
    const bgColor = getColorClass(item.type);

    return (
      <View
        className={`items-center justify-center border border-black w-full mb-4 rounded-2xl ${bgColor}`}
      >
        <Text className="my-4 font-bold text-lg">{item.name}</Text>
        <Text className="my-2 italic">{item.type}</Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white p-4">
      <SafeAreaView className="flex-1">
        <FlatList
        data={[]} // 🧺 The list of Pokémon
        renderItem={renderPokemonCard} // 🖌️ How to display each Pokémon
        keyExtractor={(item) => item.id} // 🏷️ Unique key for each item
        ItemSeparatorComponent={() => (
          <View className="h-2" /> // just a 2-pixel vertical gap
        )}
        ListEmptyComponent={
          <View className="items-center justify-center border border-red-500 flex-1">
            <Text className="text-2xl font-bold color-red-500">No items Found</Text>
          </View>
        }
      />
      </SafeAreaView>
    </View>
  );
}
