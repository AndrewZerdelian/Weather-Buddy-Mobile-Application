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
import { SearchByCityName } from "../Context/Search_CityName_Context";

export default function Searched_Weather_Condition() {
  const { ForcastByLocation } = useContext(SearchByLocation); // will be changed on the whole page data
  const { setUseFormikInput, ForcastByCity } = useContext(SearchByCityName);
  console.log(ForcastByCity);

  ////////////////////////////ADJUSTING THE STUPID DATE FROM OPEN WEATHER ////////////////////////////////
  const dailyForecast = ForcastByCity?.data?.list?.reduce((acc, item) => {
    //to arrange the date and time
    const date = new Date(item.dt_txt).toDateString();
    if (!acc.find((i) => new Date(i.dt_txt).toDateString() === date)) {
      acc.push(item);
    }
    return acc;
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <SafeAreaView className="bg-[#111013] h-full">
      <ScrollView>
        <Formik
          initialValues={{ CityName: "" }}
          onSubmit={(values) => setUseFormikInput(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View className="pt-5 px-5">
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
              name={ForcastByCity?.data?.city?.name}
              country={ForcastByCity?.data?.city?.country}
              temp={ForcastByCity?.data?.list[0]?.main?.temp.toFixed(0)}
              Weather_Description={
                ForcastByCity?.data?.list[0]?.weather[0]?.description
              }
              Weather_Icon={ForcastByCity?.data?.list[0]?.weather[0]?.icon}
              feels_like={ForcastByCity?.data?.list[0]?.main?.feels_like.toFixed(
                0
              )}
              temp_max={ForcastByCity?.data?.list[0]?.main?.temp_max.toFixed(0)}
              temp_min={ForcastByCity?.data?.list[0]?.main?.temp_min.toFixed(0)}
            />
            <View className="p-5">
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                className="py-5 bg-[#1C1C1E] rounded-2xl"
              >
                {ForcastByCity?.data?.list?.slice(0, 10)?.map((items) => {
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
                ForcastByCity?.data?.city?.sunrise * 1000
              ).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              sunset={new Date(
                ForcastByCity?.data?.city?.sunset * 1000
              ).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              population={ForcastByCity?.data?.city?.population}
              humidity={ForcastByCity?.data?.list[0]?.main?.humidity}
              visibility={ForcastByCity?.data?.list[0]?.visibility
                .toString()
                .slice(0, 2)}
              speed={ForcastByCity?.data?.list[0]?.wind?.speed}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
