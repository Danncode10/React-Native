import {View, Text} from 'react-native';
import {MyButton} from './MyButton.js'

export function Menu(){


    return(
        <View className='flex-row bg-blue-300 p-2 rounded-full shadow-lg border border-blue-100'>
            <MyButton label='Home'/>
            <MyButton label='Pray'/>
            <MyButton label='Lesson'/>
            <MyButton label='Bible'/>
            <MyButton label='Youth'/>
        </View>
    );
}