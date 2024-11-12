import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import images from "@src/constants/images";
import { CustomTextForAssets } from "@src/components/AssetsComponent/CustomTextForAssets";


const TotalAssets = () => {
  return (
    <View
      className=" relative w-[100vw] mt-[1vh] "
    >
      <View className=" mx-[1vw]">
          <Image
            source={images.transfer.totalAssetsBackground}
            className=" w-[95vw] h-[30vh] rounded-3xl absolute top-0 left-[1.5vw]"
          />
        </View>
      <View>
        <View className=" left-[4vw]">
          <Image
            source={images.Assets.curvedChart}
            className=" w-[105vw] h-[25.3vh] relative left-[1.5vw]"
          />
        </View>
        <View className=" flex-row top-[-8vh] left-[25vw]">
          <CustomTextForAssets text="Q100,353.11" type="title" />
          <TouchableOpacity className=" flex-row">
            <Image source={images.onboarding.eyeOpen} className=" mt-[-1vh]" />
            {/* <Image source={images.onboarding.eyeClosed} /> */}
          </TouchableOpacity>
        </View>
        <View className="top-[-7vh]  flex-row justify-center items-center">
          <CustomTextForAssets text="Total assets" type="Small" />
        </View>
      </View>
    </View>
  );
};

export default TotalAssets;
