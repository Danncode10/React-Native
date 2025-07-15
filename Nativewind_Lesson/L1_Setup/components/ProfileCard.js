import {View, Image} from 'react-native';

export function ProfileCard({
    profileImg, name, school, course, quote
}) {
    
  return (
    <View className='w-full h-[200px] bg-blue-100 border border-blue-800 rounded-lg' >
        <View className='justify-center '> 
            <Image source={profileImg}
                className="w-32 h-32 rounded-full"
            ></Image>
        </View>
    </View>
  );
}