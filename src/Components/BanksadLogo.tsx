import { View, Text } from "react-native";
import React from "react";
import DefaultTheme from "../Constants/DefaultTheme";

const BanksadLogo = ({ color }: { color: string }) => {
  return (
    <Text
      style={{
        fontSize: 18,
        color: color,
        fontWeight: "700",
      }}
    >
      Banksad
    </Text>
  );
};

export default BanksadLogo;
