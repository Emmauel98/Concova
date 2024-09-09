import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import images from "@src/constants/images";
import CustomButton from "@src/components/onboarding/CustomButton";

const OnboardScreen = () => {
  return (
    <SafeAreaView
      className="flex-1 relative"
      disableBottomSafeArea={true}
      disableTopSafeArea={true}
    >
      <View className=" flex-1 bg-[#05070D] ">
        <View className="flex-row justify-center items-center pt-[10vh] gap-5">
          <Image source={images.onboarding.logo} />
          <Text className=" text-center font-semibold text-[23.5px] text-white">
            CONCAVO
          </Text>
        </View>
        <Image
          source={images.onboarding.flare}
          className="absolute top-[-5vh]"
        />
        <View className=" relative top-[40vh] bg-[#00000041] w-screen">
          <Text className="text-white text-[35px] font-normal px-[5vw] mt-[3vh]">
            Your companion for better budgeting and smarter spending.
          </Text>
          <View className=" w-[70vw] h-[0.2vh] bg-white mx-[15vw] mt-[5vh]"></View>
          <View className=" flex-row justify-center items-center mt-[8vh] px-[5vw]">
            <CustomButton text={"Login"} color="#FFFFFF" width={150} />
            <CustomButton
              text={"Register"}
              color="#EDAF39"
              width={150}
              marginLeft={25}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardScreen;
