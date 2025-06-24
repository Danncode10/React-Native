import { View, Text, StyleSheet, Image } from 'react-native';
import { CustomButton } from './CustomButton'; 

export function Profile({
    username = 'Default User',
}) {
  return (
    <View style={styles.container}>

        {/* Upper Section */}
        <View style={styles.upperSection}>
            <View style={{width: 100,alignItems: 'center'}}>
                <Text>A</Text>
            </View>
            
            <View style={{width: 100,alignItems: 'center', }}>
                <Text>Profile</Text>
            </View>
            

            <View style={{width: 100,alignItems: 'center',}}>
                <Text>Free Trial</Text>
            </View>
        </View>

        {/* ProfilePic, Username, and Buttons */}
        <View style={styles.profileSection}>

            <Image
                source={require('./assets/profile.png')}
                style={{ width: 150, height: 150, borderRadius: '50%' }}
            />
            <Text>{username}</Text>

            <CustomButton iconName='gear' text='Settings' />
            

        </View>

        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  upperSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 25,
  },
  profileSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }
});