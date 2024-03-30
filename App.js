import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Weather_Condition from "./App/Weather_Condition";
import Geo_Location_Context from "./App/Context/Geo_Location_Context";
import Location_ContextAPI from "./App/Context/Location_Context";

export default function App() {
  return (
    <Geo_Location_Context>
      <Location_ContextAPI>
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
          <View>
            <Weather_Condition />
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </Location_ContextAPI>
    </Geo_Location_Context>
  );
}
