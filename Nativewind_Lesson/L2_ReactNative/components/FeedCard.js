import { View, Text, Image, TouchableOpacity} from 'react-native';

export function FeedCard({
  uri = "https://picsum.photos/100",
  title = "I should show",
  infoText = "This is info text",
  onPress
}) {

  return (
    <View className="bg-gray-100 p-10 rounded-xl shadow-lg mb-5">
        <View className='shadow-lg mb-4'> 
            {/* You cant create shadow in Image component */}
            <Image
            source={{ uri }}
            className="w-full h-48 rounded-xl"
      />
        </View>
      
      <Text className="text-black text-2xl font-bold mb-2">{title}</Text>

      <Text className="text-gray-600 mb-4">{infoText}</Text>

      <TouchableOpacity onPress={onPress}>
        <View className='bg-blue-600 rounded-full p-2 items-center'>
            <Text className='text-white font-bold'>Read More</Text>
        </View>
        
      </TouchableOpacity>
    </View>
  );
}
