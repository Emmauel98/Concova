import { View, Text, Image, Platform } from "react-native";
import React from "react";
import images from "@src/constants/images";


const SignInWith = () => {
  const data = [
    {
      name: "google",
      image: images.onboarding.google,
    },
    {
      name: "apple",
      image: images.onboarding.apple,
    },
    {
      name: "facebook",
      image: images.onboarding.facebook,
    },
  ];

  return (
    <View className=" mt-[3vh]">
      <Text className="text-center font-normal text-[#ACADB9] text-[14px] mb-[2vh]">sign in with</Text>
      <View className=" flex-row  justify-center items-center">
        {data.map((data, index) => {

          return (
            <View
             className="bg-[#262626] mx-[5vw] p-5 rounded-full h-[7vh] w-[15vw]"
             key={index}>
              <Image source={data.image} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default SignInWith;

// #262626
