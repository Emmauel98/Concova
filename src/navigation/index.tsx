import { NavigationContainer } from "@react-navigation/native";
import UserAuthentication from "./UserAuthentication";
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
