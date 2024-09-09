import { View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useOnboarding } from "@src/context/onboarding";
import OnboardScreen from "@src/screens/Authentication.tsx/OnboardScreen";
import SignUp from "@src/screens/Authentication.tsx/SignUp";
import { AuthenticationStackParamList } from "@src/utils/Types";
import GetVerificationCode from "@src/screens/Authentication.tsx/GetVerificationCode";
import DashboardStack from "./DashboardStack";





const Stack = createNativeStackNavigator<AuthenticationStackParamList>();
const UserAuthentication = () => {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="login" component={Login} /> */}
        <Stack.Screen name='onboarding' component={OnboardScreen}/>
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="getVerificationCode" component={GetVerificationCode} />
        <Stack.Screen name="dasboard" component={DashboardStack} />
        {/* <Stack.Screen name="verify" component={Login} /> */}
      </Stack.Navigator>
    </View>
  );
};

export default UserAuthentication;
