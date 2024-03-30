import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Weather_Condition from "./App/Weather_Condition";
import Geo_Location_Context from "./App/Context/Geo_Location_Context";

export default function App() {


  return (
    <Geo_Location_Context>
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <View>
        <Weather_Condition />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </Geo_Location_Context>
  );
}
