import "./global.css"
import { Text, View, ScrollView, SafeAreaView, FlatList } from "react-native";
import PokemonList from './data.json';
 
export default function App() {

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



  return (
    <View className="flex-1 justify-center bg-white p-4">
      <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        {
          PokemonList.map(pokemon => {

            const bgColor = getColorClass(pokemon.type);

            return(
              <View key={pokemon.id} 
              className={`items-center justify-center border border-black w-full mb-4 rounded-2xl ${bgColor}`}>
                <Text className="my-4 font-bold">{pokemon.name}</Text>
                <Text className="my-4">{pokemon.type}</Text>
              </View>
            );
          })
        }
       
      </ScrollView>
      </SafeAreaView>
      
    </View>
  );
}