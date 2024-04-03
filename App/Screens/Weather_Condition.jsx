import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import React, { useContext } from "react";
import CurrentWeather from "../Reusable-Components/CurrentWeather";
import { SearchByLocation } from "../Context/Location_Context";
import WeathersDetails from "../Reusable-Components/WeathersDetails";
import WeeklyForeCast from "../Reusable-Components/WeeklyForeCast";
import HightLights from "../Reusable-Components/HightLights";

export default function Weather_Condition() {
  const { ForcastByLocation } = useContext(SearchByLocation);
  console.log(ForcastByLocation);

  const dailyForecast = ForcastByLocation?.data?.list?.reduce((acc, item) => {
    //to arrange the date and time
    const date = new Date(item.dt_txt).toDateString();
    if (!acc.find((i) => new Date(i.dt_txt).toDateString() === date)) {
      acc.push(item);
    }
    return acc;
  }, []);
  return (
    <SafeAreaView>
      <ScrollView className="bg-[#111013]">
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
                  key={items?.dt}
                  TimeIn12Hour={timeIn12Hour}
                  Icon={items?.weather[0]?.icon}
                  Temp={items?.main?.temp}
                />
              );
            })}
          </ScrollView>
        </View>

        <View className="p-5">
          <View className=" bg-[#1C1C1E] rounded-xl">
            {dailyForecast?.map((item) => {
              const date = new Date(item.dt_txt);
              const dayOfWeek = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ][date.getDay()];
              const dayLabel =
                date.toDateString() === new Date().toDateString()
                  ? "Today"
                  : dayOfWeek;

              return (
                <WeeklyForeCast
                  key={item?.dt}
                  DayOfTheWeek={dayLabel}
                  Weather_Icon={item?.weather[0]?.icon}
                  temp_max={item?.main?.temp_max?.toFixed(0)}
                  temp_min={item?.main?.temp_min?.toFixed(0)}
                />
              );
            })}
          </View>
        </View>
        <HightLights
          sunrise={new Date(
            ForcastByLocation?.data?.city?.sunrise * 1000
          ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          sunset={new Date(
            ForcastByLocation?.data?.city?.sunset * 1000
          ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          population={ForcastByLocation?.data?.city?.population}
          humidity={ForcastByLocation?.data?.list[0]?.main?.humidity}
          visibility={ForcastByLocation?.data?.list[0]?.visibility
            .toString()
            .slice(0, 2)}
          speed={ForcastByLocation?.data?.list[0]?.wind?.speed}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

/** with js logic before the return
 * <View className="p-5">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ForcastByLocation?.data?.list?.slice(0, 6)}
          keyExtractor={(item) => item.dt}
          renderItem={({ item }) => {
            //
            //                                           HERE BEFORE THE RETURN WE CAN DO JAVASCRIPT LOGIC 
            return (
              <WeeklyForeCast
                DayOfTheWeek={item?.dt_txt}
                Weather_Icon={item?.weather[0]?.icon}
                temp_max={item?.main?.temp_max.toFixed(0)}
                temp_min={item?.main?.temp_min.toFixed(0)}
              />
            );
          }}
        />
      </View>
 * 
 * 
 * 
 * using flatlist without the return and javascript logic before it 
 * <FlatList
  showsVerticalScrollIndicator={false}
  data={ForcastByLocation?.data?.list}
  keyExtractor={(item) => item.dt}
  renderItem={({ item }) => (
    <WeeklyForeCast
      DayOfTheWeek={item?.dt_txt}
      Weather_Icon={item?.weather[0]?.icon}
      temp_max={item?.main?.temp_max.toFixed(0)}
      temp_min={item?.main?.temp_min.toFixed(0)}
    />
  )}
/>
 */
