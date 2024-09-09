import { View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import { PhoneNumberInput } from "@src/components/UserAuthentication/Inputs";
import images from "@src/constants/images";
import CustomText from "@src/components/UserAuthentication/CustomText";
import LoginButton from "@src/components/UserAuthentication/LoginButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticationStackParamList } from "@src/utils/Types";
import { useNavigation } from "@react-navigation/native";
import VerifyModal from "@src/components/Modal/Verify";

const GetVerificationCode = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthenticationStackParamList>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="bg-[#05070D] h-screen relative">
        <CustomText heading="Enter your Phone Number" />
        <Image
          source={images.onboarding.flare}
          className="absolute top-[6vh] left-[-15vw]"
        />
        <PhoneNumberInput />
        <View className=" absolute bottom-[10vh] w-screen">
          <LoginButton name="Continue" />
        </View>
        <VerifyModal />
      </View>
    </SafeAreaView>
  );
};

export default GetVerificationCode;
