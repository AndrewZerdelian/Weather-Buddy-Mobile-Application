import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white ">
      <Text className="font-bold text-2xl">
        Open up App.js to start working
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
