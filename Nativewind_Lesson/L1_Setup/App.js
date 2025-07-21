import { Text } from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';

const StyledLinearGradient = styled(LinearGradient);

export default function App() {
  return (
    <StyledLinearGradient
      className="flex-1 items-center justify-center"
      colors={['#ffffff', '#000000']}
    >
      <Text className="text-white text-lg">Test</Text>
    </StyledLinearGradient>
  );
}
