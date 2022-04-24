/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { View } from "react-native";
import Home from "./src/Screens/Home";
import SplashScreen from "./src/Screens/SplashScreen";
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <SplashScreen />
      <Home />
    </View>
  );
};
export default App;
