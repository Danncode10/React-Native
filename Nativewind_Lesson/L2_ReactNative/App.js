import "./global.css"
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text className="text-xl font-bold text-white">
        Welcome to Nativewind!
      </Text>
    </LinearGradient>
  );
}
