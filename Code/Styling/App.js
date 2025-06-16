import { View, Text , StyleSheet} from 'react-native';

export default function App() {
  return (
   <View style={styles.container} >
    <View style={[styles.box, styles.lightblueBg]}>
      <Text>Parent</Text>
        
        <View style={[styles.box, styles.boxChild, styles.pinkBg]}>
          <Text>Child</Text>
        </View>

    </View>

    <View style={[styles.box, styles.pinkBg]}>
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
  box:{
    height: 300,
    width: 300,
    padding: 10,
    backgroundColor: 'pink',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
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
  }

  
})
