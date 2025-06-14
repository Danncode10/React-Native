import { View } from "react-native";

export default function App(){
  return(
    <View style={{flex:1, backgroundColor: "plum"}}>
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: "red"
          }}>
        </View>

         <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: "green"
          }}>
        </View>
    </View>
  );
}