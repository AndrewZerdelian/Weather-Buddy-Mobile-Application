import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
//import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useContext } from "react";
import { Formik } from "formik";
import { SearchByLocation } from "../Context/Location_Context";
import CurrentWeather from "../Reusable-Components/CurrentWeather";
import WeathersDetails from "../Reusable-Components/WeathersDetails";
import WeeklyForeCast from "../Reusable-Components/WeeklyForeCast";
import HightLights from "../Reusable-Components/HightLights";

export default function Searched_Weather_Condition() {
  const { ForcastByLocation } = useContext(SearchByLocation); // will be changed on the whole page data
  console.log(ForcastByLocation);

  const dailyForecast = ForcastByLocation?.data?.list?.reduce((acc, item) => {
    //to arrange the date and time
    const date = new Date(item.dt_txt).toDateString();
    if (!acc.find((i) => new Date(i.dt_txt).toDateString() === date)) {
      acc.push(item);
    }
    return acc;
  }, []);
  /**
   * <Button
                      onPress={handleSubmit}
                      title="Submit"
                      color={"#EC6E4C"}
                      
                    />
   */
  return (
    <SafeAreaView className="bg-[#111013] h-full">
      <ScrollView>
        <Formik
          initialValues={{ CityName: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View className="p-5">
              <TextInput
                onChangeText={handleChange("CityName")}
                onBlur={handleBlur("CityName")}
                value={values.CityName}
                keyboardType="default"
                className="bg-slate-400 rounded-lg p-2"
                placeholder="Enter City Name"
                placeholderTextColor="white"
              />
              <View className="pt-5">
                <TouchableOpacity
                  onPress={handleSubmit}
                  className="bg-[#EC6E4C] rounded-xl"
                >
                  <Text className="text-white font-bold text-center py-3">
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
              temp_max={ForcastByLocation?.data?.list[0]?.main?.temp_max.toFixed(
                0
              )}
              temp_min={ForcastByLocation?.data?.list[0]?.main?.temp_min.toFixed(
                0
              )}
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
              ).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              sunset={new Date(
                ForcastByLocation?.data?.city?.sunset * 1000
              ).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              population={ForcastByLocation?.data?.city?.population}
              humidity={ForcastByLocation?.data?.list[0]?.main?.humidity}
              visibility={ForcastByLocation?.data?.list[0]?.visibility
                .toString()
                .slice(0, 2)}
              speed={ForcastByLocation?.data?.list[0]?.wind?.speed}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
