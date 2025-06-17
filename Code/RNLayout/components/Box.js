// import {View, Text, StyleSheet} from 'react-native'

// export default function Box({
//     children, style
// }){
//     return(
//         <View style={[styles.box, style]}>
//             <Text style={styles.text}>{children}</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     box: {
//         backgroundColor: '#fff',
//         padding: 20,
//         borderColor: 'black',
//         borderWidth: 5,
//
//     },
//     text: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         color: '#fff',
//     }
// });


import {View, Text, StyleSheet} from 'react-native'

export default function Box({
    children, style
}){
    return(
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        padding: 20,
        borderColor: 'black',
        borderWidth: 5,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },

});