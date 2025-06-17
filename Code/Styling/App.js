import { View, Text , StyleSheet} from 'react-native';

export default function App() {
  return (
   <View style={styles.container} >

    <View style={styles.darkMode}>
      <Text style={styles.whiteText}>Style Inheritance
        <Text style={styles.boldText}> in bold</Text>
      </Text>
    </View>

    <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
      <Text>Parent</Text>
        
        <View style={[styles.box, styles.boxChild, styles.pinkBg]}>
          <Text>Child</Text>
        </View>

    </View>

    <View style={[styles.box, styles.pinkBg, styles.androidShadow]}>
      <Text>Box 2</Text>
    </View>
  </View>
  );
    
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum', 
    flex: 1,
    padding: 60,
    },
  
  darkMode:{
    backgroundColor: 'black',
  },

  whiteText: {
    color: 'white',
  },

  boldText: {
    fontWeight: 'bold'
  },
  
  box:{
    height: 300,
    width: 300,
    padding: 10,
    backgroundColor: 'pink',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 20,
  },
  boxChild:{
    height: '50%',
    width: '50%'
  },
  lightblueBg: {
    backgroundColor: 'lightblue'
  },
  pinkBg: {
    backgroundColor: 'pink'
  },
  boxShadow:{
    shadowColor: "#333333",
    shadowOffset:{
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10
  }

  
})
