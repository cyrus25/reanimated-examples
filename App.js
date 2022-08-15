import "react-native-gesture-handler";
import React from "react";

import { StyleSheet, Text, View } from "react-native";

import PagerView from "react-native-pager-view";
import Basic from "./src/screens/Basic";
import PanGestureHandler from "./src/screens/PanGestureHandler";
import DoubleTapInstagram from "./src/screens/DoubleTapInstagram";
import ScrollViewWithPanGestureHandler from "./src/screens/ScrollViewWithPanGestureHandler";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        {/* <Basic key={1} /> */}
        {/* <PanGestureHandler /> */}
        {/* <DoubleTapInstagram /> */}
        <ScrollViewWithPanGestureHandler />
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
