import {View, Image, Text} from 'react-native';

export function ProfileCard({ profileImg, name, school, course, quote }) {
  return (
    <View className="w-full bg-blue-100 border border-blue-800 rounded-lg p-4 items-center">
      
      {/* Profile Image */}
      <Image
        source={profileImg}
        className="w-24 h-24 rounded-full mb-3"
      />

      {/* Name */}

      <Text className='text-2xl font-bold color-blue-900'>{name}</Text>

      {/* School and Course */}

      <Text className='text-xl color-gray-800'>{school}</Text>
      <Text className='text-md color-gray-800'>{course}</Text>

      <View className='w-2/3 h-20 bg-green-100 mt-5 border border-green-600 rounded-md items-center justify-center'>
        <Text className='font-bold' >"{quote}"</Text>
      </View>

      
    </View>
  );
}
