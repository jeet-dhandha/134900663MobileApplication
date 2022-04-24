import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";
import BanksadLogo from "../Components/BanksadLogo";
import NotificationIconComp from "../Components/NotificationIcon";
import AppDimensions from "../Constants/AppDimensions";
import { ReceiveIcon, SendIcon } from "../Constants/AppIcons";
import DefaultTheme from "../Constants/DefaultTheme";
import BottomNavigator from "./BottomNavigator";
import CardManager from "./CardManager";
import { RoundButtonIcon } from "./HomeConstants";
import RecentTransactions from "./RecentTransactions";
import ScreensManager from "./ScreensManager";

const Home = () => {
  const HORIZONTAL_PADDING = DefaultTheme.padding.extra_large * 2;
  const BUTTON_LEFT_MARGIN = DefaultTheme.padding.extra_large;
  const BUTTON_WIDTH =
    (AppDimensions.width - HORIZONTAL_PADDING * 2 - BUTTON_LEFT_MARGIN) / 2;
  const [screenName, setScreenName] = useState<any>(null);
  const RequestTransfer = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: DefaultTheme.padding.extra_large * 2,
        }}
      >
        <RoundButtonIcon
          fontSize={16}
          backgroundColor={DefaultTheme.colors.yellowLight}
          text={"Transfer"}
          icon={<SendIcon size={18} />}
          width={BUTTON_WIDTH}
          onPress={() => {
            console.log("PRESS");
            setScreenName("TRANSFER");
          }}
          textColor={DefaultTheme.colors.accent}
        />
        <RoundButtonIcon
          fontSize={16}
          backgroundColor={DefaultTheme.colors.greenLight}
          text={"Request"}
          icon={<ReceiveIcon size={18} />}
          width={BUTTON_WIDTH}
          style={{ marginLeft: BUTTON_LEFT_MARGIN }}
          textColor={DefaultTheme.colors.accent}
        />
      </View>
    );
  };
  const NotificationManger = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <BanksadLogo color={DefaultTheme.colors.accent} />
      <NotificationIconComp isAvailable={true} />
    </View>
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScreensManager screenName={screenName} setScreenName={setScreenName} />
      <View
        style={{
          padding: DefaultTheme.padding.extra_large,
          paddingHorizontal: DefaultTheme.padding.extra_large * 2,
        }}
      >
        <NotificationManger />
      </View>
      <View>
        <CardManager />
      </View>
      <View
        style={{
          paddingHorizontal: DefaultTheme.padding.extra_large * 2,
        }}
      >
        <RequestTransfer />
      </View>
      <RecentTransactions />
      <BottomNavigator />
    </SafeAreaView>
  );
};

export default Home;
