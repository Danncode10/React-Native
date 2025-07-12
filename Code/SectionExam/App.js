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
      <View style={[styles.upperContainer, { flexDirection: isIpadLandscape ? 'column' : 'row' }]}>
        <View style={[{flex: 1, justifyContent: 'center'}]}>
          <Button style={styles.pressText} title='Dark Status Bar' onPress={() => setBarStyleValue('dark') }/> 
            {/* Note:  setBarStyleValue('dark') and not 'dark-content'*/}
          <Button style={styles.pressText} title='Light Status Bar' onPress={() => setBarStyleValue('light') }/>
          <Pressable onPress={() => console.log('Pressable Text Pressed!')}>
            <Text style={styles.pressText}>Pressable Text</Text>
          </Pressable>
          <Pressable disabled>
            <Text style={styles.pressText}>Disabled</Text>
          </Pressable>
          <Pressable onLongPress={() => console.log('Long Pressed!')}>
            <Text style={styles.pressText}>Long Press</Text>
          </Pressable>
        </View>

        <View style={[styles.addBorder, {flex: 1, flexWrap: 'wrap', flexShrink: 1, padding: 10}]}>
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

        <View style={[styles.addBorder ,{flex: 5, padding: 10}]} > {/* -------------------- window map */}
          {/* This is the circle */}
          <View style={styles.circle}></View>
        </View>

          {/* Button COntrols */}
          <View style={[styles.addBorder, styles.controlSection ,{flex: 1,}]} >
            <Pressable><View style={{backgroundColor: 'darkblue',}}>
              <Text style={{color: 'white'}}>Reset Position</Text>
            </View></Pressable>

            <View style={{flexDirection: 'row', gap: 10, flex: 3, justifyContent: 'flex-end'}}>

              <Pressable onPress={() => moveUp()}><View style={{backgroundColor: 'darkblue',}}>
              <Text style={{color: 'white'}}>Up</Text>
              </View></Pressable>

              <Pressable><View style={{backgroundColor: 'darkblue',}}>
                <Text style={{color: 'white'}}>Left</Text>
                </View></Pressable>

              <Pressable><View style={{backgroundColor: 'darkblue',}}>
                <Text style={{color: 'white'}}>Down</Text>
                </View></Pressable>
              
              <Pressable><View style={{backgroundColor: 'darkblue',}}>
                <Text style={{color: 'white'}}>Right</Text>
                </View></Pressable>
            </View>

            
          </View>
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
    gap: 10,
    // flexDirection will be set dynamically in the component
  },
  addBorder: {
    borderWidth: 1,
    margin: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    // elevation: 10, 
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
    ...Platform.select({
      ios: {
        color: 'blue',
      },
      android: {
        color: 'darkblue',
      },
    }),
  },
  controlSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: 'darkblue',
    position: 'absolute',
    top: 10,
    left: 10,
  },
});



function moveUp(){
  console.log('Move Up');
}
