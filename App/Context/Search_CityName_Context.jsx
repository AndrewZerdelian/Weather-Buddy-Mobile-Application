import React, { createContext, useEffect } from "react";
import axios from "axios";

export const SearchByCityName = createContext();

export default function Search_CityName_Context({ children }) {
  const APIKEY = process?.env?.EXPO_PUBLIC_API_KEY;
  //console.log(APIKEY);

  async function GetLocationByCityName(City) {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${APIKEY}&units=metric`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetLocationByCityName();
  }, [City]);
  return (
    <SearchByLocation.Provider
      value={{ Search_CityName_Context, GetLocationByCityName }}
    >
      {children}
    </SearchByLocation.Provider>
  );
}
