import { View, Image, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import {
  EmailInput,
  NameInput,
  PasswordInput,
} from "@src/components/UserAuthentication/Inputs";
import images from "@src/constants/images";
import CustomText from "@src/components/UserAuthentication/CustomText";
import LoginButton from "@src/components/UserAuthentication/LoginButton";
import SignInWith from "@src/components/UserAuthentication/SignInWith";


const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="bg-[#05070D] h-screen">
        <CustomText heading="Create your Account" />
        <Image
          source={images.onboarding.flare}
          className="absolute top-[6vh] left-[-15vw]"
        />
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <LoginButton name="Register" />
        <View className=" flex-row justify-center items-center mt-[2vh]">
          <Text className="text-[#ACADB9] font-normal text-[16px]">
            Already Have An Account?{" "}
          </Text>
          <TouchableOpacity>
            <Text className="text-[#FFFFFF] font-normal text-[16px]">
            Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <SignInWith />
      </View>
      <StatusBar backgroundColor={'dark'} />
    </SafeAreaView>
  );
};

export default SignUp;
