import { StyleSheet, SafeAreaView, Platform, ScrollView} from 'react-native';
import {PokemonCard} from './components/PokemonCard';

export default function App() {

  const charmander = {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Growl', 'Ember', 'Leer'],
    weaknesses: ['Water', 'Ground', 'Rock']
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmander}></PokemonCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust for Android status bar
  },
});
