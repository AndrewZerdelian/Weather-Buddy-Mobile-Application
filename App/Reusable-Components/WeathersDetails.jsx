import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { Image } from "react-native";
import { SearchByLocation } from "../Context/Location_Context";

export default function WeathersDetails({ TimeIn12Hour, Icon, Temp }) {
  return (
    <View className="pt-3">
      <Text className="text-white font-bold text-center">{TimeIn12Hour}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${Icon}@2x.png`,
        }}
        alt="Weather-Icon"
        style={{ width: 75, height: 75 }}
      />
      <Text className="text-white font-bold text-center">
        {Temp.toFixed(0)}°
      </Text>
    </View>
  );
}

/** Horizontal SCROLLING WORKING FINE this option is not a reusble component
 * 
 * import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { Image } from "react-native";
import { SearchByLocation } from "../Context/Location_Context";

export default function WeathersDetails({ Time, Temp, Weather_Icon }) {
  const { ForcastByLocation } = useContext(SearchByLocation);
  console.log(ForcastByLocation?.data?.list);

  return (
    <View View className="p-5">
      <View className="bg-[#1C1C1E] rounded-2xl p-5">
        <Text className="text-white text-xl font-bold">Weathers Details</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {ForcastByLocation?.data?.list?.slice(0, 10)?.map((items) => {
            // Convert the 24-hour format to 12-hour format
            const date = new Date(items.dt_txt);
            const timeIn12Hour = date.toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            });
            return (
              <View className="pt-3">
                <Text className="text-white font-bold text-center">
                  {timeIn12Hour}
                </Text>
                <Image
                  source={{
                    uri: `https://openweathermap.org/img/wn/${items?.weather[0]?.icon}@2x.png`,
                  }}
                  alt="Weather-Icon"
                  style={{ width: 75, height: 75 }}
                />
                <Text className="text-white font-bold text-center">
                  {items?.main.temp.toFixed(0)}°
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
 * 
 */
