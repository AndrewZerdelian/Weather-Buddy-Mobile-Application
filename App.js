import React from "react";
import { SafeAreaView, Text, View, StyleSheet, StatusBar } from "react-native";
import Weather_Condition from "./App/Weather_Condition";
import Geo_Location_Context from "./App/Context/Geo_Location_Context";
import Location_ContextAPI from "./App/Context/Location_Context";
import Search_CityName_Context from "./App/Context/Search_CityName_Context";

export default function App() {
  return (
    <Geo_Location_Context>
      <Location_ContextAPI>
        <Search_CityName_Context>
          <SafeAreaView>
            <View className="bg-[#111013] h-full " >
              <Weather_Condition />
            </View>
            <StatusBar style="auto" />
          </SafeAreaView>
        </Search_CityName_Context>
      </Location_ContextAPI>
    </Geo_Location_Context>
  );
}

const styles = StyleSheet.create({
  Container: { flex: 1 },
});
