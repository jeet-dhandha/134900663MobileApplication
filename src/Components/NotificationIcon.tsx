import { View, Text } from "react-native";
import React from "react";
import { NotificationIcon } from "../Constants/AppIcons";
import DefaultTheme from "../Constants/DefaultTheme";

const NotificationIconComp = ({ isAvailable = false }) => {
  return (
    <View>
      <NotificationIcon size={24} />
      {isAvailable ? (
        <View
          style={{
            backgroundColor: DefaultTheme.colors.greenLight,
            height: 12.5,
            width: 12.5,
            borderRadius: 100,
            borderColor: DefaultTheme.colors.surface,
            borderWidth: 2,
            position: "absolute",
            top: 4,
            right: 0,
          }}
        />
      ) : null}
    </View>
  );
};

export default NotificationIconComp;
