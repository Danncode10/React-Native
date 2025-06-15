import { View, Text, Image} from "react-native";

const logoImage = require('./assets/adaptive-icon.png')

export default function App(){
  return(
    <View style={{flex:1, backgroundColor: "plum", padding:50}}>
        {/* <Image source={logoImage} style={{width:300, height:300}} />
        <Image source={{uri: 'https://picsum.photos/300'}} style={{width:300, height:300}} /> */}
    </View>
  );
}