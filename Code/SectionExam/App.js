import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, useWindowDimensions, Platform} from 'react-native';
import { useState } from 'react';


export default function App() {

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const isIpadLandscape = width > height && height > 500 ? true : false;


  // For Barstyle
  const [barStyleValue, setBarStyleValue] = useState('default');
  <StatusBar barStyle={barStyleValue} />

  // console.log(`Width: ${width}, Height: ${height}, Is iPad Landscape: ${isIpadLandscape}`);

  return (
    <SafeAreaView style={[styles.container, { flexDirection: isIpadLandscape ? 'row' : 'column' }]}>

      {/* Upper */}
      <View style={[styles.upperContainer, styles.addBorder, { flexDirection: isIpadLandscape ? 'column' : 'row' }]}>
        <View style={[styles.addBorder, {flex: 1}]}>
          <Button title='Dark Status Bar' onPress={() => setBarStyleValue('dark-content') }/>
          <Button title='Light Status Bar' onPress={() => setBarStyleValue('light-content') }/>
        </View>
        <View style={[styles.addBorder, {flex: 1}]}></View>
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
    flexDirection: 'row',
  },
  middleContainer: {
    flex: 2,
  },
  lowerContainer: {
    flex: 1, 
  },
});
