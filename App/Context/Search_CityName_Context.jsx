import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SearchByCityName = createContext();

export default function Search_CityName_Context({ children }) {
  const APIKEY = process?.env?.EXPO_PUBLIC_API_KEY;
  const [UseFormikInput, setUseFormikInput] = useState("");
  const [ForcastByCity, setForcastByCity] = useState({});
  async function GetLocationByCityName(UseFormikInput) {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${UseFormikInput}&appid=${APIKEY}&units=metric`
      );
      //console.log(response);
      setForcastByCity(response);
      //console.log(ForcastByCity);
    } catch (error) {
      console.log(error);
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
