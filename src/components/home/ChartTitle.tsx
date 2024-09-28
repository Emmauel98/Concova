import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { renderIcon } from "../common/renderIcon";

const ChartTitle = ({ name }: { name: string }) => {
  const display = name === "Others" ? "none" : "flex";
  
  return (
    <View className=" flex-row justify-between px-[3vw] py-[2vh]  rounded-3xl">
      <Text className="text-white text-[16px] font-bold">{name}</Text>
      <TouchableOpacity

>
        {name === "Transactions" ? (
          <View className=" flex-row"
          style={{
            backgroundColor: "#1E1F1F",
            paddingHorizontal: 18,
            paddingVertical: 5,
            borderRadius: 15,
          }}
          >
            <Text className=" text-[16px] font-normal text-[#FFFFFF] mr-[1vw] pt-[0.5vh]">
              Filter
            </Text>
            {renderIcon("chevron-down", "Feather", 30, "#FFFFFF")}
          </View>
        ) : (
          <View style={{ display}}>{renderIcon("chevron-right", "Feather", 30, "#FFFFFF")}</View>
        )}
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
