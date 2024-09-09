import { HousingBillsProps } from "@src/components/bills/HousingBills";
import { User } from "@src/models/User";
import { createContext, useContext } from "react";

export type OnboardingContextType = {
  verify: boolean;
  setVerify: (value: boolean) => void;
  color: string;
  setColor: (value: string) => void;
};

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export default OnboardingContext;

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
