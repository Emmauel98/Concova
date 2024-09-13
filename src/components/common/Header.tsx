import { View, Text, Image } from "react-native";
import React from "react";
import images from "@src/constants/images";

const Header = () => {
  return (
    <View className=" flex-row justify-between pt-[5vh] pb-[3vh] px-[4vw]">
      <View>
        <Image source={images.home.avatar} className="rounded-md" />
      </View>
      <View className=" flex-row">
        <Text className=" px-2 text-[16px] mt-[-2.5] font-semibold text-white">
          &#60;
        </Text>
        <Text className=" px-2 text-[14px] font-normal text-white">Today</Text>
        <Text className=" px-2 text-[16px] mt-[-2.5] font-semibold text-white">
          &#62;
        </Text>
      </View>
      <View className=" bg-[#f1f5f921] relative p-[8px] rounded-md">
        <Image source={images.home.temp} />
        <Image
          source={images.home.badge}
          className=" absolute right-[2vw] top-1"
        />
      </View>
    </View>
  );
};

export default Header;
