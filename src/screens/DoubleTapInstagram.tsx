import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";

const SIZE = 100.0;

export default function () {
  const doubleTapRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onActivated={() => {
          console.log("single tap");
        }}
      >
        <TapGestureHandler
          maxDelayMs={1000}
          numberOfTaps={2}
          ref={doubleTapRef}
          onActivated={() => {
            console.log("double tap");
          }}
        >
          <Image
            source={require("../../assets/instagram.jpeg")}
            style={{
              width: "100%",
              height: "40%",
            }}
          />
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
