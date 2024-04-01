import { View, Text } from "react-native";
import React, { useContext } from "react";
import { SearchByLocation } from "../Context/Location_Context";
import { Image } from "react-native";
export default function WeeklyForeCast({
  DayOfTheWeek,
  Weather_Icon,
  temp_max,
  temp_min,
}) {
  const { ForcastByLocation } = useContext(SearchByLocation);
  console.log(ForcastByLocation?.data);
  return (
    <View className="px-5 flex flex-row items-center justify-around ">
      <Text className="text-white font-bold">{DayOfTheWeek}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${Weather_Icon}@2x.png`,
        }}
        alt="Weather-Icon"
        style={{ width: 75, height: 75 }}
      />
      <Text className="text-white font-bold">
        {temp_max}°/{temp_min}°
      </Text>
    </View>
  );
}
