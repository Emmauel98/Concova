import { View, Image } from "react-native";
import React from "react";
import images from "@src/constants/images";


const Chart = () => {
  return (
    <View className=" mx-[7vw] mt-[2vh]">
      <Image source={images.home.chart} className=" w-[75vw]"/>
    </View>
  );
};

export default Chart;
