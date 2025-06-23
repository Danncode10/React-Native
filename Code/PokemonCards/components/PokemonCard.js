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
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>HP: ❤️ {hp}</Text>
            </View>
            <Image 
                style={styles.image} 
                source={image} 
                accessibilityLabel={'${name} pokemon}'}
                resizeMode="contain"
                />

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
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    name:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    }
});

