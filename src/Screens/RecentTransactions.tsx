import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { ThreeDotsIcon } from "../Constants/AppIcons";
import DefaultTheme from "../Constants/DefaultTheme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppDimensions from "../Constants/AppDimensions";
import { black, grey400 } from "../Constants/colors";
type CardType = {
  name: string;
  date: string;
  transaction: "DEBIT" | "CREDIT";
  amount: string;
  icon: string;
  color: string;
};
const RecentTransactions = () => {
  const [list, setList] = useState([
    {
      name: "Dribble Premiun",
      date: "3 Dec 2021",
      transaction: "DEBIT",
      amount: "$180",
      icon: "dribbble",
      color: DefaultTheme.colors.pinkLight,
    },
    {
      name: "Snapchat Ads",
      date: "3 Dec 2021",
      transaction: "CREDIT",
      amount: "$70",
      icon: "snapchat",
      color: DefaultTheme.colors.pinkLight,
    },
    {
      name: "Skype Premium",
      date: "3 Dec 2021",
      transaction: "DEBIT",
      amount: "$40",
      icon: "skype",
      color: DefaultTheme.colors.pinkLight,
    },
  ]);
  const cardItem = ({ item, index }: { item: CardType; index: number }) => {
    const SIZE = AppDimensions.width / 7;
    const BORDER_RADIUS = DefaultTheme.roundness.card / 2;
    return (
      <View
        style={{
          paddingTop: DefaultTheme.padding.medium,
          paddingHorizontal: DefaultTheme.padding.extra_large * 2.2,
        }}
      >
        <View
          style={{
            elevation: 2,
            shadowColor: black,
            shadowOpacity: 0.1,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            shadowRadius: 2,
            flexDirection: "row",
            borderRadius: BORDER_RADIUS,
            padding: DefaultTheme.padding.medium,
            backgroundColor: DefaultTheme.colors.surface,
            alignItems: "center",
            marginBottom: DefaultTheme.padding.medium,
          }}
        >
          <View
            style={{
              width: SIZE,
              height: SIZE,
              borderRadius: BORDER_RADIUS,
              backgroundColor: item.color,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name={item.icon}
              size={SIZE / 2}
              color={DefaultTheme.colors.accent}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: DefaultTheme.padding.large }}>
            <Text style={{ fontSize: 16, color: DefaultTheme.colors.accent }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 12, color: grey400 }}>{item.date}</Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color:
                item.transaction == "CREDIT"
                  ? DefaultTheme.colors.success
                  : DefaultTheme.colors.error,
            }}
          >
            {(item.transaction == "CREDIT" ? "+" : "-") + item.amount}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: DefaultTheme.padding.extra_large * 2.2,
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: DefaultTheme.padding.extra_large,
          paddingTop: DefaultTheme.padding.extra_large,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: DefaultTheme.colors.accent,
            fontWeight: "700",
          }}
        >
          Recent Transactions
        </Text>
        <ThreeDotsIcon />
      </View>
      <FlatList data={list} renderItem={cardItem} />
    </View>
  );
};

export default RecentTransactions;
