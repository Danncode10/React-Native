import { View, Text , StyleSheet} from 'react-native';

export default function App() {
  return (
   <View style={styles.container} >
    <View style={[styles.box, styles.lightblueBg]}>
      <Text>Lightblue</Text>
    </View>

    <View>
      <Text>Lightgreen</Text>
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
    height: 100,
    width: 100,
    padding: 10
  },
  lightblueBg: {
    backgroundColor: 'lightblue'
  }
  
})
