import { isArray } from "lodash";
import React from "react";
import {
  Pressable,
  PressableProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "../Components/AppText";
import AppDimensions from "../Constants/AppDimensions";
import DefaultTheme from "../Constants/DefaultTheme";
export const CARD_WIDTH = AppDimensions.width / 1.2;
export const CARD_HEIGHT = AppDimensions.height / 3.5;
export const BUTTON_HEIGHT = AppDimensions.height / 12.5;
export const BIG_FONT = AppDimensions.width / 7.5;
export const VISA_HEIGHT = AppDimensions.width / 18;

export const RoundButton = ({
  text,
  backgroundColor,
  textColor,
  fontSize = 18,
  onPress = () => {},
}: {
  text: string;
  backgroundColor: string;
  textColor: string;
  fontSize?: number;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        height: BUTTON_HEIGHT,
        width: CARD_WIDTH,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
        borderRadius: DefaultTheme.roundness.medium,
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          color: textColor,
          fontSize: fontSize,
          fontWeight: "500",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};
export const RoundButtonIcon = ({
  text,
  backgroundColor,
  textColor,
  width = CARD_WIDTH,
  fontSize = 18,
  onPress = () => {},
  icon,
  style = {},
}: {
  text: string;
  backgroundColor: string;
  textColor: string;
  fontSize?: number;
  width?: number;
  onPress?: () => void;
  style?: PressableProps["style"];
  icon: any;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height: BUTTON_HEIGHT / 1.2,
          width: width,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: backgroundColor,
          borderRadius: DefaultTheme.roundness.medium * 1.5,
          flexDirection: "row",
        },
        ...(isArray(style) ? style : [style]),
      ]}
    >
      <View style={{ marginRight: 10 }}>{icon}</View>
      <Text
        style={{
          alignSelf: "center",
          color: textColor,
          fontSize: fontSize,
          fontWeight: "500",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};
