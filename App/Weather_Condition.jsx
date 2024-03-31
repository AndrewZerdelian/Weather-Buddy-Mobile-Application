import { View } from "react-native";
import React, { useContext } from "react";
import CurrentWeather from "./Reusable-Components/CurrentWeather";
import { SearchByLocation } from "./Context/Location_Context";

export default function Weather_Condition() {
  const { ForcastByLocation } = useContext(SearchByLocation);
  //console.log(ForcastByLocation?.data);
  console.log(ForcastByLocation?.data?.list[0]);
  return (
    <View>
      <CurrentWeather
        Current_Weather={"Current Weather"}
        name={ForcastByLocation?.data?.city?.name}
        country={ForcastByLocation?.data?.city?.country}
        temp={ForcastByLocation?.data?.list[0]?.main?.temp.toFixed(0)}
        Weather_Description={
          ForcastByLocation?.data?.list[0]?.weather[0]?.description
        }
        Weather_Icon={ForcastByLocation?.data?.list[0]?.weather[0]?.icon}
        feels_like={ForcastByLocation?.data?.list[0]?.main?.feels_like.toFixed(
          0
        )}
        temp_max={ForcastByLocation?.data?.list[0]?.main?.temp_max.toFixed(0)}
        temp_min={ForcastByLocation?.data?.list[0]?.main?.temp_min.toFixed(0)}
      />
    </View>
  );
}
