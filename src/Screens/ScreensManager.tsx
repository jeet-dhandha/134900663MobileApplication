import { View, Text } from "react-native";
import React from "react";
import AppDimensions from "../Constants/AppDimensions";
import DefaultTheme from "../Constants/DefaultTheme";
import TransferMoneyScreen from "./TransferMoneyScreen";

const ScreensManager = ({ screenName, setScreenName }) => {
  return screenName === null ? null : (
    <View
      style={{
        height: AppDimensions.height,
        width: AppDimensions.width,
        position: "absolute",
        zIndex: 1,
      }}
    >
      {screenName === "TRANSFER" ? (
        <TransferMoneyScreen
          setScreenName={setScreenName}
          isActive={screenName === "TRANSFER"}
        />
      ) : null}
    </View>
  );
};

export default ScreensManager;
