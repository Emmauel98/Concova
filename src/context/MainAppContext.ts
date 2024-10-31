
import { createContext, useContext } from "react";
import { StyleProp } from "react-native";
import { ViewStyle } from "react-native";
import { ImageProps } from "react-native";


export type MainAppContextType = {
  customNavigationForTransferPst: number;
  setCustomNavigationForTransferPst: (value: number) => void;
  selectBankName: string;
  setSelectBankName: (value: string) => void;
  selectBankLogo: ImageProps | '';
  setSelectBankLogo: (value: ImageProps | '') => void;
  TransferTo: 'Transfer to Bank' | 'Transfer to Concavo' | 'Select a Bank' | '';
  setTransferTo: (value: 'Transfer to Bank' | 'Transfer to Concavo' | 'Select a Bank' | '') => void;
  indicator: StyleProp<ViewStyle>;
  setIndicator: (value: StyleProp<ViewStyle>) => void;
};

const MainAppContext = createContext<MainAppContextType | null>(null);

export default MainAppContext;

export const useMainAppContext = () => {
  const context = useContext(MainAppContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
