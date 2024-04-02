import { View, Text } from "react-native";
import React, { useContext } from "react";
import { SearchByLocation } from "../Context/Location_Context";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function HightLights({
  sunrise,
  sunset,
  population,
  humidity,
  visibility,
  speed,
}) {
  const { ForcastByLocation } = useContext(SearchByLocation);
  //console.log(ForcastByLocation?.data?.list);
  return (
    <View className="">
      <View className="flex flex-row items-center justify-around ">
        <View className="w-40 h-24 items-center bg-[#1C1C1E] rounded-xl p-5">
          <View className="flex flex-row items-center gap-1">
            <Text className="text-white font-bold">Sunrise</Text>
            <Feather name="sunrise" size={24} color="white" />
          </View>
          <Text className="text-white text-xl font-bold">{sunrise}</Text>
        </View>
        <View className=" w-40 h-24 items-center bg-[#1C1C1E] rounded-xl p-5">
          <View className="flex flex-row items-center gap-1">
            <Text className="text-white font-bold">Sunset</Text>
            <Feather name="sunset" size={24} color="white" />
          </View>
          <Text className="text-white text-xl font-bold">{sunset}</Text>
        </View>
      </View>

      <View className="flex flex-row items-center justify-around pt-3">
        <View className="w-40 h-24 items-center  bg-[#1C1C1E] rounded-xl p-5">
          <View className="flex flex-row items-center gap-1">
            <Text className="text-white font-bold">Population</Text>
            <MaterialCommunityIcons
              name="human-capacity-increase"
              size={24}
              color="white"
            />
          </View>
          <Text className="text-white text-xl font-bold">{population}</Text>
        </View>
        <View className="w-40 h-24 items-center  bg-[#1C1C1E] rounded-xl p-5">
          <View className="flex flex-row items-center gap-1">
            <Text className="text-white font-bold">Humidity</Text>
            <MaterialCommunityIcons
              name="water-percent"
              size={24}
              color="white"
            />
          </View>
          <Text className="text-white text-xl font-bold">{humidity}%</Text>
        </View>
      </View>

      <View className="flex flex-row items-center justify-around pt-3">
        <View className="w-40 h-24 items-center  bg-[#1C1C1E] rounded-xl p-5">
          <View className="flex flex-row items-center gap-1">
            <Text className="text-white font-bold">Visibility</Text>
            <MaterialIcons name="visibility" size={24} color="white" />
          </View>

          <Text className="text-white text-xl font-bold">{visibility} K/M</Text>
        </View>
        <View className="w-40 h-24 items-center  bg-[#1C1C1E] rounded-xl p-5">
          <View className="flex flex-row items-center gap-1">
            <Text className="text-white font-bold">Wind</Text>
            <Feather name="wind" size={24} color="white" />
          </View>
          <Text className="text-white text-xl font-bold">{speed} k/h</Text>
        </View>
      </View>
    </View>
  );
}
