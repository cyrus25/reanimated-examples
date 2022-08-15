import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Text, StyleSheet, Dimensions } from "react-native";

export const { width: PAGE_WIDTH } = Dimensions.get("window");

const Page = ({ index, title, translateX }) => {
  const pageOffset = PAGE_WIDTH * index;

  const reanimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value + pageOffset,
        },
      ],
    };
  });

  // console.log(translateX);

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          flex: 1,
          backgroundColor: `rgba(0,0,256,0.${index + 2})`,
          justifyContent: "center",
          alignItems: "center",
        },
        reanimatedStyles,
      ]}
    >
      <Text
        style={{
          fontSize: 70,
          fontWeight: "700",
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
    </Animated.View>
  );
};

export default Page;
