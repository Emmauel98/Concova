import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { renderIcon } from "../common/renderIcon";

const ChartTitle = ({ name }: { name: string }) => {
  return (
    <View className=" flex-row justify-between px-[3vw] py-[2vh]  rounded-3xl">
      <Text className="text-white text-[16px] font-bold">{name}</Text>
      <TouchableOpacity>
        {renderIcon("chevron-right", "Feather", 30, "#FFFFFF")}
      </TouchableOpacity>
    </View>
  );
};

export default ChartTitle;

export const ChartDescription = ({ desc }: { desc: string }) => {
  return (
    <View>
      <Text className="text-[14px] font-medium text-white px-[4vw] py-[3vh]">
        {desc}
      </Text>
    </View>
  );
};
