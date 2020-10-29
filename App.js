import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  Alert,
  Button,
  Dimensions,
} from "react-native";
import {
  useDemensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
