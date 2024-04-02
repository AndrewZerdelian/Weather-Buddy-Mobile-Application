import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import Weather_Condition from "./App/Weather_Condition";
import Geo_Location_Context from "./App/Context/Geo_Location_Context";
import Location_ContextAPI from "./App/Context/Location_Context";
import Search_CityName_Context from "./App/Context/Search_CityName_Context";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <NavigationContainer>
      <Geo_Location_Context>
        <Location_ContextAPI>
          <Search_CityName_Context>
            <SafeAreaView>
              <ScrollView className="bg-[#111013] h-full">
                <View className="flex flex-row items-end gap-5">
                  <Text className="text-white text-xl font-bold pl-5 pt-3">
                    Weather Buddy
                  </Text>
                  <FontAwesome5 name="cloud-sun" size={24} color="white" />
                </View>
                <Weather_Condition />
              </ScrollView>
              <StatusBar style="auto" />
            </SafeAreaView>
          </Search_CityName_Context>
        </Location_ContextAPI>
      </Geo_Location_Context>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: { flex: 1 },
});
