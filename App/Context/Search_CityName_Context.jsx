import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const SearchByCityName = createContext();

export default function Search_CityName_Context({ children }) {
  //const APIKEY = process?.env?.EXPO_PUBLIC_API_KEY;
  const APIKEY = "5b4d62e08c9c6ec649fed20e88108cde";
  const [UseFormikInput, setUseFormikInput] = useState("");
  const [ForcastByCity, setForcastByCity] = useState({});
  async function GetLocationByCityName(UseFormikInput) {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${UseFormikInput}&appid=${APIKEY}&units=metric`
      );
      setForcastByCity(response);
      //await AsyncStorage.setItem("CityNames", ForcastByCity?.data?.city?.name);
      //console.log(await AsyncStorage.getItem("CityNames"));
    } catch (error) {
      //console.log("Error fetching data:", error);
    }
  }
  useEffect(() => {
    if (UseFormikInput.CityName) {
      GetLocationByCityName(UseFormikInput.CityName);
    }
  }, [UseFormikInput]);
  return (
    <SearchByCityName.Provider
      value={{
        Search_CityName_Context,
        GetLocationByCityName,
        UseFormikInput,
        setUseFormikInput,
        ForcastByCity,
        setForcastByCity,
      }}
    >
      {children}
    </SearchByCityName.Provider>
  );
}

/**
 *       //await AsyncStorage.setItem("CityName", response?.data?.city?.name);
      //console.log(ForcastByCity?.data);
      //console.log(AsyncStorage.getItem("CityName"));


      //const StoreCityName = response?.data?.city?.name;
      //if (StoreCityName) {
        //await AsyncStorage.setItem("CityName", StoreCityName);
        //console.log(AsyncStorage.getItem("CityName"));
      //} else {
        //console.log("City name not found in response data");
      //}
 */
