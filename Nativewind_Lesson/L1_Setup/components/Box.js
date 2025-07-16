import {View, Text} from 'react-native'

export function Box({style}){
    return(
        <View className="bg-blue-100 w-[100px] h-[100px] items-center justify-center border border-blue-800 m-3" style={style} >
            <Text className="font-bold color-blue-800">Box</Text>
        </View>
    );
}

