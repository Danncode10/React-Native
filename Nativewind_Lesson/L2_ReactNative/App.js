import "./global.css"
import { View, SafeAreaView, Text, ScrollView, Alert } from "react-native";
import { FeedCard } from "./components/FeedCard";

export default function App() {
  return (
    <View className="bg-blue-200 flex-1">
      <SafeAreaView>
        <ScrollView>
          <View className='p-4'>
            <FeedCard
              uri="https://picsum.photos/300"
              title="Tech Update: AI Revolutionizes Farming"
              infoText="Artificial intelligence is now being used to optimize crop yields and reduce waste."
              onPress={() => Alert.alert("This is the Read More")}
            />
            <FeedCard
              uri="https://picsum.photos/400"
              title="Space News: Mars Rover Discovers Ice"
              infoText="NASA's rover has found evidence of water ice beneath the surface of Mars."
              onPress={() => Alert.alert("This is the Read More")}
            />
            <FeedCard
              uri="https://picsum.photos/500"
              title="Health: Breakthrough in Cancer Research"
              infoText="Scientists have developed a new therapy showing promising results in early trials."
              onPress={() => Alert.alert("This is the Read More")}
            />
            <FeedCard
              uri="https://picsum.photos/450"
              title="Environment: Coral Reefs Making a Comeback"
              infoText="Conservation efforts are helping restore coral reefs in several regions worldwide."
              onPress={() => Alert.alert("This is the Read More")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
