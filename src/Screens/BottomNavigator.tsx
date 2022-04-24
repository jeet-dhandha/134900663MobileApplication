import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  DocumentIcon,
  GraphIcon,
  HomeIcon,
  ScanIcon,
  WalletIcon,
} from "../Constants/AppIcons";
import DefaultTheme from "../Constants/DefaultTheme";
import { black } from "../Constants/colors";

const BottomNavigator = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: DefaultTheme.padding.extra_large * 2,
        paddingBottom: DefaultTheme.padding.extra_large,
        flex: 1,
        alignItems: "flex-end",
      }}
    >
      <View style={styles.iconStyle}>
        <HomeIcon color={DefaultTheme.colors.greenLight} />
      </View>
      <View style={styles.iconStyle}>
        <GraphIcon />
      </View>
      <View style={[styles.iconStyle]}>
        <View style={styles.iconBackground}>
          <ScanIcon color={DefaultTheme.colors.surface} />
        </View>
      </View>
      <View style={styles.iconStyle}>
        <WalletIcon size={24} />
      </View>
      <View style={styles.iconStyle}>
        <DocumentIcon size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: { flex: 1, alignItems: "center" },
  iconBackground: {
    padding: DefaultTheme.padding.extra_large,
    backgroundColor: DefaultTheme.colors.accent,
    borderRadius: DefaultTheme.roundness.round,
    elevation: 2,
    shadowColor: black,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 2,
    marginBottom: -DefaultTheme.padding.extra_large,
  },
});
export default BottomNavigator;
