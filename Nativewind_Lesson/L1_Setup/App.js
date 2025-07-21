import "./global.css"
import {View, SafeAreaView} from 'react-native';
import {Menu} from './components/Menu.js'
import { Body } from "./components/Body.js";

import {Gradient} from "./components/Gradient.js"

export default function App() {
  return(
      <View className="flex-1 items-center bg-blue-200 px-4">
        <SafeAreaView>
          {/* <Menu />
          <Body /> */}
        </SafeAreaView>

    </View>
  );
}
