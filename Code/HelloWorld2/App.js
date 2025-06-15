
import { View, ActivityIndicator} from "react-native";


export default function App(){
  return(
    <View style={{backgroundColor: 'plum', flex:1, padding: 60}}>
      <ActivityIndicator
        size="large"
        color='midnightblue'
        animating={true}
      
      ></ActivityIndicator>
    </View>
  );
}