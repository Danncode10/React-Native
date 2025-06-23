import { StyleSheet, View, Text, SafeAreaView, Platform} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
      <View style={[styles.box,]}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum'
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
