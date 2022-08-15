import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const SIZE = 100.0;

export default function () {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }],
    };
  }, []);

  React.useEffect(() => {
    progress.value = withSpring(0.5, 2);
    scale.value = withRepeat(withSpring(3), 5, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: SIZE,
            height: SIZE,
            backgroundColor: "red",
          },
          reanimatedStyles,
        ]}
      ></Animated.View>
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
