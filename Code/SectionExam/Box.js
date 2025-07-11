import {View, StyleSheet, Text} from 'react-native';

export function Box(style) {
    return(
        <View style={[styles.box, style]}>
            {/* Style should be width and height */}
            
        </View>
    )
}

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    backgroundColor: 'lightblue',
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    margin: 5
  },
    text: {},
});
