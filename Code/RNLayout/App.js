import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#8e9b00', top: 75, left: 75}}>Box 1</Box>
      <Box style={{backgroundColor: "#b65d1f"}}>Box 2</Box>
      <Box style={{backgroundColor: "#1c4c56"}}>Box 3</Box>
      <Box style={{backgroundColor: "#ab9156", position: 'absolute', top: 100, left: 100}}>Box 4</Box>
      <Box style={{backgroundColor: "#6b0803"}}>Box 5</Box>
      <Box style={{backgroundColor: "#1c4c56"}}>Box 6</Box>
      <Box style={{backgroundColor: "#b95f21"}}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
    flexDirection: 'column',
    alignItems: 'stretch'
    
  },
});


// import { StyleSheet, Text, View } from 'react-native';
// import Box from './components/Box';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={[styles.c_style, styles.addBorder, styles.margin10]}>
//         <Box style={styles.margin10}>A</Box>
//         <Box style={{borderWidth: 0}}>C</Box>
//         <Box style={styles.margin10}>B</Box>
//       </View>

//       <View style={[styles.addBorder, styles.margin10, {flex: 1}]}>
//         <Box style={[styles.margin10, styles.i_style]}>I</Box>

//         <Box style={[styles.margin10, styles.h_style]}>

//             <Box style={{flex: 0.2}}>D</Box>
//             <Box style={{flex: 0.2}}>E</Box>
//             <Box style={{flex: 0.2}}>F</Box>
//             <Box style={{flex: 0.2}}>G</Box>
          
//         </Box>

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     marginTop: 60,
//     borderWidth: 6,
//     borderColor: 'red',
    
//   },
  
//   addBorder: {
//       borderColor: 'black',
//       borderWidth: 5,
//   },

//   margin10: {
//     margin: 10
//   },

//   c_style: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     // width: 175,
//     flex: 0.4,
//   },


//   i_style: {
//     flex: 1
//   },

//   h_style: {
//     flex: 6,
//     flexDirection: 'column',
//     justifyContent: 'space-evenly',
//   },

// });


// Practice 2: 


// import {View, StyleSheet} from 'react-native';

// export default function App(){
//   return(
//     <View style={styles.container}>
//       {/* Top Box */}
//       <View style={[styles.addShadow, styles.topBox]}>
//         {/* Menu */}
//         <View style={[styles.upperTopBox]}>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//         </View>
//         <View style={[styles.addShadow, styles.lowerTopBox, {shadowOffset: {width: 0, height: -2}}]}></View>
//       </View>

//       {/* Bot Box */}
//       <View style={[styles.addShadow, styles.botBox]}>
//         <View style={[, styles.childBox]}>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//         </View>
//         <View style={[, styles.childBox]}>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//           <View style={[styles.addShadow, styles.childBox]}></View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'plum',
//     flex: 1, 
//     padding: 20,
//     borderBlockColor: 'red',
//     marginTop: 60,
//   },
//   addShadow: {
//     backgroundColor: 'plum', // Required to see shadow
//     borderRadius: 10, // Optional, makes it look nicer

//     // iOS shadow
//     shadowColor: '#000',
//     shadowOpacity: 0.5,
//     shadowRadius: 10,
//     shadowOffset: {
//       width: 0,
//       height: 0,
//   },

//   // Android shadow
//   elevation: 8, // Try adjusting this for more/less shadow
// },

//   topBox: {
//     flex: 1,
//     margin: 5,
//   },
//       upperTopBox:{
//         flex: 1,
//         margin: 5,
//         flexDirection: 'row'
//       },
//           childBox: {
//             flex: 1,
//             margin: 5,
//           },
//       lowerTopBox: {
//         flex: 5,
//         margin: 5
//       },

//   botBox: {
//     flex: 1,
//     margin: 5,
//     flexDirection: 'row'
//   }, 
//   // childBox also used in botBox
// });


// Practice 3:

// import {View, StyleSheet} from 'react-native';

// export default function App(){

//   return(
//     <View style={styles.container}>
//       <View style={[styles.addBorder, styles.flex1, styles.flexDirectionRows]}>
//         <View style={[styles.addBorder, styles.flex1,]}></View>
//         <View style={[styles.addBorder, styles.flex1]}></View>
//       </View>
//       <View style={[styles.addBorder, styles.flex1, styles.flexDirectionRows]}>
//         <View style={[styles.addBorder, styles.flex1]}></View>
//         <View style={[styles.addBorder, styles.flex1]}></View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'plum',
//     flex: 1,
//     marginTop: 60,
//   },
//   addBorder: {
//     borderWidth: 2,
//   },
//   flex1: {
//     flex: 1
//   },
//   flexDirectionRows:{
//     flexDirection: 'row',
//   },
  
// });