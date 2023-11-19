import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import React,  {useState} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Intro from "./src/screens/Intro";
import Registration from "./src/screens/Registration";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import PlanCheck from "./src/screens/PlanCheck";
import PhotoTakenSceen from "./src/screens/PhotoTakenSceen";

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const update = "h11";

function App() {

  let [fontsLoaded] = useFonts({
    PretendardBold: require("./assets/fonts/Pretendard-Bold.otf"),
    PretendardRegular: require("./assets/fonts/Pretendard-Regular.otf"),
    PretendardSemiBold: require("./assets/fonts/Pretendard-SemiBold.otf"),
    PretendardLight: require("./assets/fonts/Pretendard-Light.otf"),
    PretendardMedium: require("./assets/fonts/Pretendard-Medium.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return(
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen
        name="LogIn"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
            <Stack.Screen
        name="PlanCheck"
        component={PlanCheck}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="PhotoTakenSceen"
        component={PhotoTakenSceen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )

}

export default App;
