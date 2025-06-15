import { View, Button, Modal, Text} from "react-native";
import { useState } from "react";

const logoImage = require('./assets/adaptive-icon.png')

export default function App(){

  const [isModalVisible, setIsModalVisible] = useState(false);

  return(
    <View style={{backgroundColor: 'plum', flex:1, padding:60}}>
      <Button title="Press" color="midnightblue"
        onPress={() => setIsModalVisible(true)}
      />



      {/* Add the modal statement before </View> */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="overFullScreen"
      >
        <View style={{backgroundColor: 'lightblue', flex:1, padding:60}}>
          <Text>This is the Modal</Text>
        </View>
        
      </Modal>
    </View>
  );
}
