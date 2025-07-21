import {View} from 'react-native';
import { Blog1 } from './Blogs/Blog1';

export function Body(){

    const baseStyle = "flex-1 border border-red-800 p-5 gap-5";

    return(
        <View className={`${baseStyle}`}>
            <View className={`${baseStyle}`}>
                <Blog1 />
            </View>


            <View className={`${baseStyle}`}></View>
        </View>
    );
}