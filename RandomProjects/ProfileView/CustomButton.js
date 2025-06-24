import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function CustomButton({
    iconName,
    text,
}){
    return (
        <View style={styles.container}>
            <View style={{flex: 1, borderWidth: 1}}>
                <Icon name={iconName} size={30}/>
            </View>
            
            <View style={{flex: 3, borderWidth: 1, alignItems: 'center'}}>
                <Text>{text}</Text>
            </View>
            
        </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});