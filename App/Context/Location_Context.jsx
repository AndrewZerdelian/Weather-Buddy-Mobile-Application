import { View, Text } from "react-native";
import React, { createContext } from "react";
import axios from "axios";

export const SearchByLocation = createContext();

export default function Location_ContextAPI({ children }) {
  const APIKEY = process?.env?.EXPO_PUBLIC_API_KEY;
  console.log(APIKEY);
  
  async function GetLocationByLongLat() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${APIKEY}&units=metric`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View>
      <Text>Location_Context</Text>
    </View>
  );
}
