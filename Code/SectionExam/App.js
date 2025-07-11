import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions, Platform} from 'react-native';

export default function App() {

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const isIpadLandscape = width > height && height > 500 ? true : false;

  // console.log(`Width: ${width}, Height: ${height}, Is iPad Landscape: ${isIpadLandscape}`);

  return (
    <SafeAreaView style={[styles.container, { flexDirection: isIpadLandscape ? 'row' : 'column' }]}>
      {/* Upper */}
      <View style={[styles.upperContainer, styles.addBorder]}>

      </View>

      {/* Middle */}
      <View style={[styles.middleContainer, styles.addBorder]}>
      </View>

      {/* Lower */}
      <View style={[styles.lowerContainer, styles.addBorder]}>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 20,
    // flexDirection will be set dynamically in the component
  },
  addBorder: {
    borderWidth: 2,
  },
  upperContainer: {
    flex: 1,
  },
  middleContainer: {
    flex: 2,
  },
  lowerContainer: {
    flex: 1, 
  },
});
