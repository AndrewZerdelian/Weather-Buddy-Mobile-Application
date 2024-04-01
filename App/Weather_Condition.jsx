import { ScrollView, View } from "react-native";
import React, { useContext } from "react";
import CurrentWeather from "./Reusable-Components/CurrentWeather";
import { SearchByLocation } from "./Context/Location_Context";
import WeathersDetails from "./Reusable-Components/WeathersDetails";

export default function Weather_Condition() {
  const { ForcastByLocation } = useContext(SearchByLocation);
  //console.log(ForcastByLocation?.data);

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
      <View className="p-5">
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="py-5 bg-[#1C1C1E] rounded-2xl"
        >
          {ForcastByLocation?.data?.list?.slice(0, 10)?.map((items) => {
            // Convert the 24-hour format to 12-hour format
            const date = new Date(items.dt_txt);
            const timeIn12Hour = date.toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            });
            return (
              <WeathersDetails
                TimeIn12Hour={timeIn12Hour}
                Icon={items?.weather[0]?.icon}
                Temp={items?.main.temp}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
/**
 * Time={ForcastByLocation?.data?.list?.dt}
        Weather_Icon={ForcastByLocation?.data?.list[0]?.weather[0]?.icon}
        Temp={ForcastByLocation?.data?.list[0]?.main?.temp.toFixed(0)}
 */
