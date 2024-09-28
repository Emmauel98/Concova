import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@src/constants/images";
import { CustomTextForAssets } from "@src/components/AssetsComponent/CustomTextForAssets";

const TotalAssets = () => {
  return (
    <View className=" relative w-[90vw]">
      <View>
        <View className=" left-[4vw]">
          <Image
            source={images.Assets.curvedChart}
            className=" w-[105vw] h-[25vh]"
          />
        </View>
        <View className=" flex-row top-[-8vh] left-[25vw]">
          <CustomTextForAssets text="Q100,353.11" type="title" />
          <TouchableOpacity className=" flex-row">
            <Image source={images.onboarding.eyeOpen} className=" mt-[-1vh]" />
            {/* <Image source={images.onboarding.eyeClosed} /> */}
          </TouchableOpacity>
        </View>
        <View className="top-[-7vh] left-[5vw] flex-row justify-center items-center">
          <CustomTextForAssets text="Total assets" type="Small" />
        </View>
      </View>
    </View>
  );
};

export default TotalAssets;
