// import "expo-router/entry"
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { registerRootComponent } from "expo";
import RootNavigation from "./navigation";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OnboardingContext from "./context/onboarding";

export default function App() {
  const [verify, setVerify] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#CECAC3");

  return (
    <>
      <OnboardingContext.Provider
        value={{ verify, setVerify, color, setColor }}
      >
        <SafeAreaProvider>
          <GestureHandlerRootView>
            <RootNavigation />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </OnboardingContext.Provider>
      <Toast />
    </>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
