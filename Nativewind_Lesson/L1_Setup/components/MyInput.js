import { TextInput } from 'react-native';

export function MyInput({ placeholder, value, onChange, secure = false }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={secure}
      className="w-full max-w-md px-4 py-4 border border-gray-400 rounded-full bg-white text-black mt-5 shadow-sm"
      placeholderTextColor="#999"
    />
  );
}
