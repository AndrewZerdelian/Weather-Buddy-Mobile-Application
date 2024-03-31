import { View, Text } from "react-native";
import { Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EvilIcons } from "@expo/vector-icons";
export default function CurrentWeather() {
  return (
    <View className="p-5">
      <View className="bg-[#1C1C1E] rounded-2xl p-5">
        <Text className="text-white text-xl font-bold">Current Weather</Text>
        <View className="pt-5">
          <Text className="text-white text-2xl font-bold">31°C</Text>
          <Image src="../../assets/splash.png" alt="Weather-Icon" />
        </View>
        <Text className="text-white font-bold border-b border-b-slate-100 pt-5">
          Few Clouds
        </Text>
        <View className="flex flex-row pt-5">
          <EvilIcons name="location" size={20} color="white" />
          <Text className="text-white font-bold ">Cairo Governorate / EG</Text>
        </View>
      </View>
    </View>
  );
}
//style={{ color: "white", flex: 1, justifyContent: "center" }}
