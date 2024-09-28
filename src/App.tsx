// import "expo-router/entry"
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { registerRootComponent } from "expo";
import RootNavigation from "./navigation";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OnboardingContext from "./context/onboarding";
import MainAppContext from "./context/MainAppContext";
import { StyleProp } from "react-native";
import { ViewStyle } from "react-native";


export default function App() {
  const [verify, setVerify] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#CECAC3");
  const [selectBank, setSelectBank] = useState<string>("");
  const [TransferTo, setTransferTo] = useState<'Transfer to Bank' | 'Transfer to Concavo' | 'Select a Bank' | ''>("");
  const [customNavigationForTransferPst, setCustomNavigationForTransferPst] =
    useState<number>(0);
  const [indicator, setIndicator] =
    useState<StyleProp<ViewStyle>>({left: '1%'});


  return (
    <>
      <OnboardingContext.Provider
        value={{ verify, setVerify, color, setColor }}
      >
        <MainAppContext.Provider
          value={{
            customNavigationForTransferPst,
            setCustomNavigationForTransferPst,
            indicator,
             setIndicator,
             TransferTo, 
             setTransferTo,
             selectBank, 
             setSelectBank,
          }}
        >
          <SafeAreaProvider>
            <GestureHandlerRootView>
              <RootNavigation />
            </GestureHandlerRootView>
          </SafeAreaProvider>
          <Toast />
        </MainAppContext.Provider>
      </OnboardingContext.Provider>
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
