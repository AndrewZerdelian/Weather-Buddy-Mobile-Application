import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SearchByCityName } from "../Context/Search_CityName_Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Searched_City_History() {
  const { ForcastByCity } = useContext(SearchByCityName);

  const [cityNames, setCityNames] = useState([]);

  async function Getting_City_History() {
    try {
      const existingCityNames = await AsyncStorage.getItem("CityNames");
      let cityNamesArray;
      try {
        cityNamesArray = JSON.parse(existingCityNames);
        if (!Array.isArray(cityNamesArray)) {
          cityNamesArray = [];
        }
      } catch (error) {
        cityNamesArray = [];
      }
      setCityNames(cityNamesArray);
    } catch (error) {
      console.log("5ARRAH");
    }
  }

  useEffect(() => {
    Getting_City_History();
  }, []);

  useEffect(() => {
    if (ForcastByCity?.data?.city?.name) {
      const newCityName = ForcastByCity.data.city.name;
      if (!cityNames.includes(newCityName)) {
        setCityNames((prevCityNames) => [...prevCityNames, newCityName]);
        AsyncStorage.setItem(
          "CityNames",
          JSON.stringify([...cityNames, newCityName])
        );
      }
    }
  }, [ForcastByCity]);

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem("CityNames");
      setCityNames([]);
    } catch (error) {
      console.log("Error clearing city history:", error);
    }
  };

  return (
    <SafeAreaView className="bg-[#111013] h-full">
      <ScrollView>
        {cityNames.length > 0 ? (
          <View>
            <View>
              <Text className="text-white text-center pt-5 text-2xl font-bold">
                Searched Cities
              </Text>
            </View>

            <View className="p-5">
              {cityNames.map((cityName, index) => (
                <View key={index} className="pt-5">
                  <TouchableOpacity  
                  className="bg-[#EC6E4C] rounded-xl">
                    <Text className="text-white font-bold text-center py-3">
                      {cityName}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <View className="p-5">
              <TouchableOpacity
                className="bg-red-600 rounded-xl"
                onPress={clearHistory}
              >
                <Text className="text-white font-bold text-center py-3">
                  Clear History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Text className="text-white text-center pt-5 text-2xl font-bold">
              No History to Display
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

/** Works Perfectly 
 * import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SearchByCityName } from "../Context/Search_CityName_Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Searched_City_History() {
  const { ForcastByCity } = useContext(SearchByCityName);

  const [cityNames, setCityNames] = useState([]);

  async function Getting_City_History() {
    try {
      const existingCityNames = await AsyncStorage.getItem("CityNames");
      let cityNamesArray;
      try {
        cityNamesArray = JSON.parse(existingCityNames);
        if (!Array.isArray(cityNamesArray)) {
          cityNamesArray = [];
        }
      } catch (error) {
        cityNamesArray = [];
      }
      setCityNames(cityNamesArray);
    } catch (error) {
      console.log("5ARRAH");
    }
  }

  useEffect(() => {
    Getting_City_History();
  }, []);

  useEffect(() => {
    if (ForcastByCity?.data?.city?.name) {
      const newCityName = ForcastByCity.data.city.name;
      if (!cityNames.includes(newCityName)) {
        setCityNames((prevCityNames) => [...prevCityNames, newCityName]);
        AsyncStorage.setItem(
          "CityNames",
          JSON.stringify([...cityNames, newCityName])
        );
      }
    }
  }, [ForcastByCity]);

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem("CityNames");
      setCityNames([]);
    } catch (error) {
      console.log("Error clearing city history:", error);
    }
  };

  return (
    <SafeAreaView className="bg-[#111013] h-full">
      <ScrollView>
        {cityNames.length > 0 ? (
          <View>
            <View>
              <Text className="text-white text-center pt-5 text-2xl font-bold">
                Searched Cities
              </Text>
            </View>

            <View className="p-5">
              {cityNames.map((cityName, index) => (
                <View key={index} className="pt-5">
                  <TouchableOpacity className="bg-[#EC6E4C] rounded-xl">
                    <Text className="text-white font-bold text-center py-3">
                      {cityName}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <View className="p-5">
              <TouchableOpacity
                className="bg-red-600 rounded-xl"
                onPress={clearHistory}
              >
                <Text className="text-white font-bold text-center py-3">
                  Clear History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Text className="text-white text-center pt-5 text-2xl font-bold">
              No History to Display
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
 */