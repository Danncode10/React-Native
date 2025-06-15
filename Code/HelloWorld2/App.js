import { View, Text, Image, ImageBackground} from "react-native";

const logoImage = require('./assets/adaptive-icon.png')

export default function App(){
  return(
    <View style={{flex:1, backgroundColor: "plum", padding:50}}>
       
        <ImageBackground source={{uri: 'https://picsum.photos/300'}} style={{flex: 1}}>
            <Text>This is an Image</Text>
        </ImageBackground>
        
    </View>
  );
}
 {/* <Image source={logoImage} style={{width:300, height:300}} />
        <Image source={{uri: 'https://picsum.photos/300'}} style={{width:300, height:300}} /> */}