import React from "react";
import { StyleSheet } from "react-native";
import Weather_Condition from "./App/Screens/Weather_Condition";
import Geo_Location_Context from "./App/Context/Geo_Location_Context";
import Location_ContextAPI from "./App/Context/Location_Context";
import Search_CityName_Context from "./App/Context/Search_CityName_Context";
import { NavigationContainer } from "@react-navigation/native";
import Searched_Weather_Condition from "./App/Screens/Searched_Weather_Condition";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Routes = createBottomTabNavigator();
// 2nd missing searched hestory for city names
// fix the icons gapping and padding / marginigns
// 3rd missing getting the days data
export default function App() {
  return (
    <Geo_Location_Context>
      <Location_ContextAPI>
        <Search_CityName_Context>
          <NavigationContainer>
            <Routes.Navigator
              screenOptions={{
                headerTitle: "Weather Buddy", // title of the header
                tabBarActiveTintColor: "tomato", // color for the selected tab
                tabBarInactiveTintColor: "gray", // color for the non-selected tabs
                tabBarStyle: {
                  backgroundColor: "#111013", // background color of the tab bar
                  borderTopWidth: 0, // border at the top of the tab bar
                },
              }}
            >
              <Routes.Screen
                name="Home"
                component={Weather_Condition}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="cloud-sun" size={24} color="white" />
                  ),
                }}
              />
              <Routes.Screen
                name="Search"
                component={Searched_Weather_Condition}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="search" size={24} color="white" />
                  ),
                }}
              />
            </Routes.Navigator>
          </NavigationContainer>
        </Search_CityName_Context>
      </Location_ContextAPI>
    </Geo_Location_Context>
  );
}

const styles = StyleSheet.create({
  Container: { flex: 1 },
});

/** Before Routing 
 *     <NavigationContainer>
      <Geo_Location_Context>
        <Location_ContextAPI>
          <Search_CityName_Context>
            <SafeAreaView>
              <ScrollView className="bg-[#111013] h-full">
                <View className="flex flex-row items-end gap-5">
                  <Text className="text-white text-xl font-bold pl-5 pt-3">
                    Weather Buddy
                  </Text>
                  <FontAwesome5 name="cloud-sun" size={24} color="white" />
                </View>
                <Routes.Navigator>
                  <Routes.Screen name="Home" component={Weather_Condition} />
                  <Routes.Screen
                    name="Search"
                    component={Searched_Weather_Condition}
                  />
                </Routes.Navigator>
                 <Weather_Condition />  
                </ScrollView>
                <StatusBar style="auto" />
              </SafeAreaView>
            </Search_CityName_Context>
          </Location_ContextAPI>
        </Geo_Location_Context>
      </NavigationContainer>
 */
