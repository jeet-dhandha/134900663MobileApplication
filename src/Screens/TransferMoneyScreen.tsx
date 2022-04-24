import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import AppDimensions from "../Constants/AppDimensions";
import DefaultTheme from "../Constants/DefaultTheme";
import { RoundButton, RoundButtonIcon } from "./HomeConstants";
import { LeftArrowIcon, ReceiveIcon } from "../Constants/AppIcons";
import { black, grey400 } from "../Constants/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
type CardType = {
  name: string;
  date: string;
  icon: string;
  secondIcon: string;
  color: string;
};
const TransferMoneyScreen = ({ isActive, setScreenName }) => {
  const parseInteger = (number) => {
    try {
      return parseInt(number);
    } catch (err) {
      return null;
    }
  };
  const [displayNone, setDisplayNone] = useState(false);
  const [amountText, setAmountText] = useState("");
  const [list, setList] = useState<CardType[]>([
    {
      name: "Dribble Premiun",
      date: "Wells Fargo",
      icon: "user",
      color: DefaultTheme.colors.greenLight,
      secondIcon: "plus",
    },
    {
      name: "Movie",
      date: "Category",
      icon: "film",
      color: DefaultTheme.colors.yellowLight,
      secondIcon: "chevron-down",
    },
  ]);

  const splashOpacity = useSharedValue(0);
  const splashOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(splashOpacity.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });
  const keyboard = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["", "0", "erase"],
  ];
  useEffect(() => {
    if (isActive) {
      splashOpacity.value = 1;
      setTimeout(() => {
        setDisplayNone(false);
      }, 200);
    } else {
      splashOpacity.value = 0;
      setTimeout(() => {
        setDisplayNone(true);
      }, 200);
    }
  }, [isActive]);
  const onBackPress = () => {
    if (setScreenName) {
      splashOpacity.value = 0;
      setTimeout(() => {
        setScreenName(null);
      }, 200);
    }
  };
  const Header = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingTop: 10,
          alignItems: "center",
        }}
      >
        <Pressable
          style={{ width: AppDimensions.width / 10 }}
          onPress={onBackPress}
        >
          <LeftArrowIcon size={AppDimensions.width / 10 / 1.4} />
        </Pressable>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>{"Transfer"}</Text>
        </View>
        <View style={{ width: AppDimensions.width / 10 }}></View>
      </View>
    );
  };
  const cardItem = ({ item, index }: { item: CardType; index: number }) => {
    const SIZE = AppDimensions.width / 7;
    const BORDER_RADIUS = DefaultTheme.roundness.card / 2;
    return (
      <View
        style={{
          paddingTop: DefaultTheme.padding.medium,
          paddingHorizontal: DefaultTheme.padding.medium,
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
              size={SIZE / 3}
              color={DefaultTheme.colors.accent}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: DefaultTheme.padding.large }}>
            <Text style={{ fontSize: 12, color: grey400 }}>{item.date}</Text>
            <Text
              style={{
                fontSize: 16,
                color: DefaultTheme.colors.accent,
                marginTop: 10,
              }}
            >
              {item.name}
            </Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <Feather
              name={item.secondIcon}
              size={SIZE / 3}
              color={DefaultTheme.colors.accent}
            />
          </View>
        </View>
      </View>
    );
  };
  return displayNone ? null : (
    <Animated.View
      style={[
        {
          height: AppDimensions.height,
          width: AppDimensions.width,
          backgroundColor: DefaultTheme.colors.surface,
          position: "absolute",
          zIndex: 1,
          alignItems: "center",
          // justifyContent: "flex-end",
          paddingVertical: Platform.OS === "android" ? 0 : 40,
          paddingBottom: Platform.OS === "android" ? 0 : 30,
        },
        splashOpacityStyle,
      ]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.85 }}>
            <TextInput
              placeholder="$1000"
              value={amountText}
              style={{
                fontSize: 36,
                fontWeight: "600",
                textAlign: "center",
                marginTop: 40,
                marginBottom: 30,
              }}
            />
            {cardItem({
              item: list[0],
              index: 0,
            })}
            {cardItem({
              item: list[1],
              index: 0,
            })}
          </View>
          <View style={{ flex: 1, flexWrap: "wrap" }}>
            {keyboard.map((item, index) => (
              <View
                style={{ flex: 1, flexDirection: "row" }}
                key={"keyboard_list_" + `${index}`}
              >
                {item.map((sub_item, sub_index) => (
                  <Pressable
                    key={"keyboard_list_sub_" + `${sub_index}` + `${index}`}
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      if (sub_item === "erase") {
                        if (amountText.length === 2) {
                          setAmountText("");
                        } else {
                          setAmountText(
                            amountText.slice(0, amountText.length - 1)
                          );
                        }
                      } else if (parseInteger(sub_item) != null) {
                        if (amountText === "" && sub_item != "0") {
                          setAmountText("$" + sub_item);
                        } else if (amountText.length >= 2) {
                          setAmountText(amountText + sub_item);
                        }
                      }
                    }}
                  >
                    {sub_item === "erase" ? (
                      <LeftArrowIcon
                        color={DefaultTheme.colors.error}
                        size={30}
                      />
                    ) : parseInteger(sub_item) != null ? (
                      <Text style={{ fontSize: 24, fontWeight: "600" }}>
                        {sub_item}
                      </Text>
                    ) : null}
                  </Pressable>
                ))}
              </View>
            ))}
          </View>
        </View>
        {RoundButton({
          text: "Send Money",
          backgroundColor: DefaultTheme.colors.accent,
          textColor: DefaultTheme.colors.surface,
          onPress: () => {
            onBackPress();
          },
        })}
      </SafeAreaView>
    </Animated.View>
  );
};

export default TransferMoneyScreen;
