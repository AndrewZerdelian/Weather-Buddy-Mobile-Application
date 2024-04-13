import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { GetUserLocation } from "./Geo_Location_Context";

export const SearchByLocation = createContext();
const APIKEY = process?.env?.EXPO_PUBLIC_API_KEY;
export default function Location_ContextAPI({ children }) {
  const { Longitude, Latitude } = useContext(GetUserLocation);
  const [ForcastByLocation, setForcastByLocation] = useState({});
  async function GetLocationByLongLat() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${Latitude}&lon=${Longitude}&appid=${APIKEY}&units=metric`
      );
      console.log(response);
      setForcastByLocation(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (Latitude && Longitude) {
      GetLocationByLongLat();
    }
  }, [Longitude, Latitude]);
  return (
    <SearchByLocation.Provider
      value={{ Location_ContextAPI, GetLocationByLongLat, ForcastByLocation }}
    >
      {children}
    </SearchByLocation.Provider>
  );
}
