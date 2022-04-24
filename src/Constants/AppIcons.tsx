import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DefaultTheme from "./DefaultTheme";

export const ThreeDotsIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Entypo name="dots-three-horizontal" size={size} color={color} />;

export const OptionsIcon = ({
  color = DefaultTheme.colors.surface,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Ionicons name="ios-options-outline" size={size} color={color} />;

export const NotificationIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Ionicons name="ios-notifications-outline" size={size} color={color} />;
export const WalletIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Ionicons name="wallet-outline" size={size} color={color} />;
export const DocumentIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Ionicons name="ios-document-text-outline" size={size} color={color} />;
export const LeftArrowIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Octicons name="arrow-left" size={size} color={color} />;

export const PlusIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <AntDesign name="plus" size={size} color={color} />;

export const SendIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <FontAwesome name="send" size={size} color={color} />;

export const HomeIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Octicons name="home" size={size} color={color} />;
export const GraphIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Octicons name="graph" size={size} color={color} />;

export const ScanIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <MaterialCommunityIcons name="line-scan" size={size} color={color} />;

export const ReceiveIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => (
  <SimpleLineIcons
    name="login"
    size={size}
    color={color}
    style={{
      transform: [
        {
          rotate: "90deg",
        },
      ],
    }}
  />
);
