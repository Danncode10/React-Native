
import { View, Alert, Button} from "react-native";


export default function App(){
  return(
    <View style={{backgroundColor: 'plum', flex:1, padding: 60}}>
      <Button title="Alert"
        onPress={() =>
          Alert.alert("Alert", "The data you submit is incorrect", [
            {
              text: "Edit",
              onPress: () => console.log("Data Edited")
            },
            {
              text: "Cancel",
              onPress: () => console.log("Clicked Exit")
            }
          ])
        }
      />

    </View>
  );
}