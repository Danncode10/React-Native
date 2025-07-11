import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, useWindowDimensions, Platform, Pressable} from 'react-native';
import { useState } from 'react';
import { Box } from './Box'; 


export default function App() {

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const isLargeScreen = width > 500 ? true : false;
  const isIpadLandscape = width > 500 && height > 600 ? true : false;


  // For Barstyle
  const [barStyleValue, setBarStyleValue] = useState('auto');

  // console.log(`Width: ${width}, Height: ${height}, Is iPad Landscape: ${isIpadLandscape}`);

  return (
    <SafeAreaView style={[styles.container, { flexDirection: isIpadLandscape ? 'row' : 'column' }]}>
      <StatusBar style={barStyleValue} />
      
      {/* Upper */}
      <View style={[styles.upperContainer, styles.addBorder, { flexDirection: isIpadLandscape ? 'column' : 'row' }]}>
        <View style={[styles.addBorder, {flex: 1, justifyContent: 'center'}]}>
          <Button title='Dark Status Bar' onPress={() => setBarStyleValue('dark') }/> 
            {/* Note:  setBarStyleValue('dark') and not 'dark-content'*/}
          <Button title='Light Status Bar' onPress={() => setBarStyleValue('light') }/>
          <Pressable>
            <Text style={styles.pressText}>Pressable Text</Text>
          </Pressable>
        </View>

        <View style={[styles.addBorder, {flex: 1, flexWrap: 'wrap', flexShrink: 1}]}>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          
          
        </View>
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
    margin: 5,
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
  pressText: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  }
});
