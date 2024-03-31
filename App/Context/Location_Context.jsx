import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { GetUserLocation } from "./Geo_Location_Context";

export const SearchByLocation = createContext();
const APIKEY = process?.env?.EXPO_PUBLIC_API_KEY;
export default function Location_ContextAPI({ children }) {
  const { Longitude, Latitude } = useContext(GetUserLocation);
  async function GetLocationByLongLat() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${Latitude}&lon=${Longitude}&appid=${APIKEY}&units=metric`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetLocationByLongLat();
  }, [Longitude, Latitude]);
  return (
    <SearchByLocation.Provider
      value={{ Location_ContextAPI, GetLocationByLongLat }}
    >
      {children}
    </SearchByLocation.Provider>
  );
}
