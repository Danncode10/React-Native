import {TouchableOpacity, Text} from 'react-native';

export function MyButton({ label, variant = "primary", onPress}){

    const baseStyle = 'rounded-full px-5 py-3 items-center m-1 shadow-sm'

    const variants = {
        primary: "bg-blue-600",
        secondary: "bg-gray-200",
        disabled: "bg-gray-400 opacity-50",
        danger: "bg-red-600"
    }

    const textVariants = {
        primary: "text-white font-bold",
        secondary: "text-black font-semibold",
        disabled: "text-white font-semibold",
        danger: "text-white font-bold"
    }

    return(
       <TouchableOpacity
            className={`${variants[variant]} ${baseStyle}`}
            onPress={onPress}
       >
        <Text
            className={`${textVariants[variant]}`}
        >
            {label}
        </Text>

       </TouchableOpacity>
    );

}