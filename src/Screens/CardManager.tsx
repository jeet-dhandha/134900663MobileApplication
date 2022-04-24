import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppDimensions from "../Constants/AppDimensions";
import DefaultTheme from "../Constants/DefaultTheme";
import { VISA_HEIGHT } from "./HomeConstants";
import { capitalize } from "lodash";
import { black, grey400 } from "../Constants/colors";
import { PlusIcon } from "../Constants/AppIcons";

type CardType = {
  card_company: string;
  amount: string;
  cardFirst4: string;
  card_type: string;
  expiry_year: string;
  expiry_month: string;
};
const CardManager = () => {
  const FLATLIST_CARD_HEIGHT = AppDimensions.height / 5;
  const FLATLIST_CARD_WIDTH = AppDimensions.width / 1.5;
  const ADD_ITEM_WIDTH = (AppDimensions.width - FLATLIST_CARD_WIDTH) / 2.7;
  const FLATLIST_CARD_BORDER_RADIUS = DefaultTheme.roundness.card / 1.4;
  const [cards, setCards] = useState([
    {
      card_company: "VISA",
      amount: "$1200",
      cardFirst4: "4225",
      card_type: "DEBIT_CARD",
      expiry_year: "2024",
      expiry_month: "09",
    },
  ]);
  const AddCard = () => {
    return (
      <View
        style={{
          paddingLeft: DefaultTheme.padding.extra_large,
          paddingVertical: DefaultTheme.padding.medium,
        }}
      >
        <View
          style={{
            height: FLATLIST_CARD_HEIGHT,
            width: ADD_ITEM_WIDTH,
            borderWidth: 2,
            borderColor: grey400,
            borderStyle: "dashed",
            borderRadius: FLATLIST_CARD_BORDER_RADIUS / 1.2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlusIcon color={grey400} size={24} />
        </View>
      </View>
    );
  };
  const CardItem = ({
    item,
    index,
  }: {
    item: CardType | null;
    index: number;
  }) => {
    return item == null ? (
      <AddCard />
    ) : (
      <View
        style={{
          paddingHorizontal: DefaultTheme.padding.medium,
          paddingVertical: DefaultTheme.padding.medium,
        }}
      >
        <View
          key={"list_item_" + index.toString()}
          style={{
            height: FLATLIST_CARD_HEIGHT,
            width: FLATLIST_CARD_WIDTH,
            backgroundColor: DefaultTheme.colors.accent,
            borderRadius: FLATLIST_CARD_BORDER_RADIUS,
            padding: DefaultTheme.padding.extra_large * 1.5,
            elevation: 2,
            shadowColor: black,
            shadowOpacity: 0.5,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            shadowRadius: 4,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "600",
                color: DefaultTheme.colors.surface,
              }}
            >
              {item.amount}
            </Text>
            {item.card_company == "VISA" ? (
              <Image
                source={require("../assets/images/visa.png")}
                style={{
                  height: VISA_HEIGHT,
                  width: VISA_HEIGHT * 3,
                }}
                resizeMode="contain"
              />
            ) : null}
          </View>
          <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
            <Text style={style.card_number}>{item.cardFirst4}</Text>
            <Text style={style.card_dots}>{"...."}</Text>
            <Text style={style.card_dots}>{"...."}</Text>
            <Text style={style.card_dots}>{"...."}</Text>
          </View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text
              style={{ color: DefaultTheme.colors.pinkLight, fontSize: 14 }}
            >
              {item.card_type
                .split("_")
                .map((item) => capitalize(item))
                .join(" ")}
            </Text>
            <Text style={{ color: DefaultTheme.colors.surface, fontSize: 14 }}>
              {item.expiry_month +
                "/" +
                item.expiry_year.slice(
                  item.expiry_year.length - 2,
                  item.expiry_year.length
                )}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      horizontal={true}
      style={{
        marginTop: 5,
        marginHorizontal: DefaultTheme.padding.extra_large * 1.5,
      }}
      data={[...cards, null]}
      renderItem={CardItem}
    />
  );
};

const style = StyleSheet.create({
  card_number: {
    color: DefaultTheme.colors.surface,
    fontSize: 16,
  },
  card_dots: {
    color: DefaultTheme.colors.surface,
    fontSize: 36,
    marginTop: -24,
    marginLeft: DefaultTheme.padding.extra_large,
  },
});
export default CardManager;
