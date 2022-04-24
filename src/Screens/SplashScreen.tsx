import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import AppDimensions from "../Constants/AppDimensions";
import DefaultTheme from "../Constants/DefaultTheme";
import {
  BIG_FONT,
  CARD_HEIGHT,
  CARD_WIDTH,
  RoundButton,
  VISA_HEIGHT,
} from "./HomeConstants";
import Svg, { Path } from "react-native-svg";
import BanksadLogo from "../Components/BanksadLogo";

const SplashScreen = () => {
  const [displayNone, setDisplayNone] = useState(false);

  const splashOpacity = useSharedValue(1);
  const splashOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(splashOpacity.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });

  const onPressGetStarted = () => {
    splashOpacity.value = 0.5;
    setTimeout(() => {
      setDisplayNone(true);
    }, 200);
  };

  const SMILE = () => {
    const X = CARD_WIDTH / 1.25;
    const Y = 0;
    const cX = CARD_WIDTH - CARD_WIDTH / 1.2;
    const cY = 0;
    const RADIUS = (X - cX) / 1.9;
    return (
      <Svg width={CARD_WIDTH / 1.1} height={CARD_HEIGHT / 1.8}>
        <Path
          d={`M ${X} ${Y} A ${RADIUS},${RADIUS} 0 0,1 ${cX} ${cY}`}
          stroke={DefaultTheme.colors.yellowLight}
          strokeWidth="4"
        />
      </Svg>
    );
  };
  const CardCreator = ({
    children,
    color,
  }: {
    children?: any;
    color: string;
  }) => (
    <View
      style={{
        borderWidth: 4,
        borderColor: color,
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        backgroundColor: DefaultTheme.colors.accent,
        borderRadius: DefaultTheme.roundness.card,
      }}
      children={children}
    />
  );
  return displayNone ? null : (
    <Animated.View
      style={[
        {
          height: AppDimensions.height,
          width: AppDimensions.width,
          backgroundColor: DefaultTheme.colors.accent,
          position: "absolute",
          zIndex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 30,
        },
        splashOpacityStyle,
      ]}
    >
      <View>
        <View
          style={{
            position: "absolute",
            right: CARD_WIDTH / 2,
            top: CARD_HEIGHT / 3,
          }}
        >
          <CardCreator color={DefaultTheme.colors.pinkLight} />
        </View>

        <View
          style={{
            position: "absolute",
            right: -CARD_WIDTH / 1.3,
            top: -CARD_HEIGHT / 1.5,
          }}
        >
          <CardCreator color={DefaultTheme.colors.blueLight} />
        </View>
        <CardCreator color={DefaultTheme.colors.surface}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <BanksadLogo color={DefaultTheme.colors.greenLight} />
              <Image
                source={require("../assets/images/visa.png")}
                style={{
                  height: VISA_HEIGHT,
                  width: VISA_HEIGHT * 3,
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              {SMILE()}
            </View>
          </View>
        </CardCreator>
      </View>
      <View
        style={{
          width: CARD_WIDTH,
          paddingBottom: AppDimensions.height / 18,
          paddingTop: AppDimensions.height / 5.5,
        }}
      >
        <Text
          style={{
            color: DefaultTheme.colors.surface,
            fontSize: BIG_FONT,
          }}
        >
          Help You
        </Text>
        <Text
          style={{
            color: DefaultTheme.colors.surface,
            fontSize: BIG_FONT,
          }}
        >
          Digitize Your
        </Text>
        <Text
          style={{
            color: DefaultTheme.colors.surface,
            fontSize: BIG_FONT,
          }}
        >
          Finances
        </Text>
      </View>
      {RoundButton({
        text: "Get Started",
        backgroundColor: DefaultTheme.colors.greenLight,
        textColor: DefaultTheme.colors.text,
        onPress: onPressGetStarted,
      })}
    </Animated.View>
  );
};

export default SplashScreen;
