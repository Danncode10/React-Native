import {View, Text, StyleSheet, Platform, Image} from 'react-native';

export function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}){
    return(
        <View style={styles.card}>
            <View>
                <Text>{name}</Text>
                <Text>HP: {hp}</Text>
            </View>
            <Image source={image} accessibilityLabel={'${name} pokemon}'} />

            <View>
                <Text>{type}</Text>
            </View>

            <View>
                <Text>Moves: {moves.join(', ')}</Text>
            </View>

            <View>
                <Text>Weaknesses: {weaknesses.join(', ')}</Text>
            </View>

        </View>
    );
} 

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        margin: 16,
        borderWidth: 2,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5,
            }
        }),
    },
});

