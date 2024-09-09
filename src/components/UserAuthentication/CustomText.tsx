import { View, Text } from "react-native";
import React from "react";

const CustomText = ({ heading }: { heading: string }) => {
  return (
    <View className=" relative">
      <View className=" relative">
        <Text className="relative text-[38px] font-semibold text-left ml-5 mb-[5vh] text-[#FFFFFF] mt-[15vh]">
          {heading}
        </Text>
      </View>
    </View>
  );
};

export default CustomText;
