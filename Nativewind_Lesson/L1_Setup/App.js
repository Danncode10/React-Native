import "./global.css"
import { Text, View, Image, SafeAreaView } from "react-native";
import { ProfileCard } from "./components/ProfileCard";
 
export default function App() {
  const intensity = '100'
  const boxColor = `bg-blue-${intensity}`

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white p-5">

      {/* <Text className="text-xl font-semibold text-center text-blue-600 uppercase underline dark:text-gray-100">
        Welcome to My App!
      </Text>

      
      <View className={`w-60 h-60 ${boxColor} items-center justify-center`}>
        <Text className="line-through text-xl text-red-500 font-bold">Error</Text>
        <Text className="text-xl text-green-600 font-light">Success</Text>
        <Text className="underline text-xl text-gray-500 ">Secondary Info</Text>

      </View> */}


      {/* <View className="bg-yellow-100 p-4 rounded-lg">
        <Text className="text-yellow-800">Low Battery</Text>
      </View>

      <View className="bg-green-100 p-4 rounded-lg mt-4">
        <Text className="text-green-800">Full Battery</Text>
      </View> */}

      {/* <View className="w-full h-80 mt-8 relative rounded-lg overflow-hidden ">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
          }}
          className="w-full h-full"
        />

        <View className="absolute inset-0 flex items-center justify-center">
          <View className="bg-black/40 px-4 py-2 rounded-md">
            <Text className="text-4xl text-white text-center">
              Transparent Image Background
            </Text>
          </View>
        </View>
      </View> */}

      {/* Profile Card Exercise */}

      <ProfileCard 
          name="Lester Dann G. Lopez"
          school="Nueva Vizcaya State University"
          course="Computer Science major in Robotics"
          quote="Day 1, not one day"
      />
      


    </SafeAreaView>
  );
}