import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";

export const GetUserLocation = createContext();

export default function Geo_Location_Context({ children }) {
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);

  async function GetLocation() {
    try {
      const AskingPermission =
        await Location.requestForegroundPermissionsAsync();
      //console.log(AskingPermission);
      const location = await Location.getCurrentPositionAsync();
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      //console.log("FROM CONTEXT GEO LOCATION" + location);
      //console.log(Latitude);
      //console.log(Longitude);
    } catch (error) {
      console.log(error);     
    }
  }

  useEffect(() => {
    GetLocation();
  }, [Longitude, Latitude]);
  return (
    <GetUserLocation.Provider
      value={{ Geo_Location_Context, GetLocation, Longitude, Latitude }}
    >
      {children}
    </GetUserLocation.Provider>
  );
}
