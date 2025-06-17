// import { StyleSheet, Text, View } from 'react-native';
// import Box from './components/Box';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Box style={{backgroundColor: '#8e9b00'}}>Box 1</Box>
//       <Box style={{backgroundColor: "#b65d1f"}}>Box 2</Box>
//       <Box style={{backgroundColor: "#1c4c56"}}>Box 3</Box>
//       <Box style={{backgroundColor: "#ab9156"}}>Box 4</Box>
//       <Box style={{backgroundColor: "#6b0803"}}>Box 5</Box>
//       <Box style={{backgroundColor: "#1c4c56"}}>Box 6</Box>
//       <Box style={{backgroundColor: "#b95f21"}}>Box 7</Box>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     height: 300,
//     flexWrap: 'wrap',
//     alignContent: 'stretch',
//     justifyContent: 'flex-end',


//     marginTop: 64,
//     borderWidth: 6,
//     borderColor: 'red',
    
//   },
// });


import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.c_style, styles.addBorder]}>
        <Box style={styles.margin20}>A</Box>
        <Box style={styles.margin20}>B</Box>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 60,
    borderWidth: 6,
    borderColor: 'red',
    
  },
  
  addBorder: {
      borderColor: 'black',
      borderWidth: 5,
  },

  margin20: {
    margin: 20
  },


  c_style: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 175,
  },

   
});
