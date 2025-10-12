import { useOnboarding } from "@src/context/onboarding";
import { useMainAppContext } from "@src/context/MainAppContext";

const useOnboardingContext = () => {
  const context = useOnboarding()!;
  if (!context) {
    throw new Error("An error occurred");
  }

  return context;
};

export default useOnboardingContext;

export const useMainAppContextFunc = () => {
  const context = useMainAppContext()!;
  if (!context) {
    throw new Error("An error occurred");
  }

  return context;
};

