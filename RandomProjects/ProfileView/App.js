import { StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import { Profile } from './Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Profile username='Dannlopez' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust for Android status bar
    backgroundColor: 'lightblue', 
  },
});
