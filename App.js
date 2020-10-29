import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableHighlight onPress={() => console.log('Image tapped')}>
      <Image
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/seed/picsum/200/300",
        }}
      />
      </TouchableHighlight>
      <Button title={"Sumbit"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
