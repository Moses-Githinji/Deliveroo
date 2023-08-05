import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "inherit",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
