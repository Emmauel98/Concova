import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
// import DashboardStack from "./DashboardStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import UserAuthentication from "./UserAuthentication";
import { useOnboarding } from "@src/context/onboarding";
import React from "react";



export type RootStackParamList = {
  login: undefined;
  verify: undefined;
};


const RootNavigation = () => {
  

  return (
    <NavigationContainer>
        <UserAuthentication />
    </NavigationContainer>
  );
};

export default RootNavigation;
