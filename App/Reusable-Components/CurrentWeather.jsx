import { View, Text } from "react-native";
import { Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function CurrentWeather({
  Current_Weather,
  temp,
  Weather_Description,
  Weather_Icon,
  name,
  country,
  feels_like,
  temp_max,
  temp_min,
}) {
  return (
    <View className="p-5">
      <View className="bg-[#1C1C1E] rounded-2xl p-5">
        <Text className="text-white text-xl font-bold">{Current_Weather}</Text>
        <View className="pt-5 flex flex-row justify-between">
          <View>
            <Text className="text-white text-6xl font-bold">{temp}°</Text>
            <Text className="text-white font-bold">
              Hight {temp_max}° / Low {temp_min}°
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${Weather_Icon}@2x.png`,
              }}
              alt="Weather-Icon"
              style={{ width: 100, height: 100 }}
            />
            <Text className="text-white text-center font-bold">
              Feels like {feels_like}°
            </Text>
          </View>
        </View>
        <Text className="text-white font-bold  pt-5">
          {Weather_Description}
        </Text>
        <Text className="border-b border-b-slate-100"></Text>
        <View className="flex flex-row pt-5">
          <EvilIcons name="location" size={20} color="white" />
          <Text className="text-white font-bold ">
            {name} / {country}
          </Text>
        </View>
      </View>
    </View>
  );
}
