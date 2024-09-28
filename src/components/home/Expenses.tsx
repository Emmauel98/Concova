import { View, Text, Image, ImageProps } from "react-native";
import React from "react";
import ExpensesTitle from "./ExpensesTitle";
import images from "@src/constants/images";
import { appColors } from "@src/constants/colors";
import { renderIcon } from "../common/renderIcon";

export type expensesProps = {
  name: string;
  amount: string;
  desc: string;
  color: string;
  BarChartImage: ImageProps;
  handImage: ImageProps;
};

const Expenses = ({
  name,
  amount,
  desc,
  color,
  BarChartImage,
  handImage,
}: expensesProps) => {
  return (
    <View className=" mt-[5vh]">
      <ExpensesTitle name={name}  />
      <View className=" flex-row mx-[5vw]">
        <View className=" bg-[#0C0C11] p-[10px] rounded-full mr-[1vw]">
          <Image source={handImage} />
        </View>
        <View className="">
          <Text className="text-[14px] font-normal" style={{ color }}>
            {amount}
          </Text>
          <Text
            className="text-[14px] font-normal w-[80vw] mt-[1vh]"
            style={{ color: appColors.gray }}
          >
            {desc}
          </Text>
        </View>
      </View>
      <HeaderSection name={name} />
      <BarChart BarChartImage={BarChartImage} />
      <FinalText />
    </View>
  );
};

export default Expenses;

export const HeaderSection = ({ name }: { name: string }) => {
  return (
    <View className=" flex-row justify-between items-center mx-[5vw] mt-[4vh]">
      <View className=" flex-row items-center">
        <View className=" p-[10px] bg-[#f1f5f956] rounded-lg w-[11vw]">
          {renderIcon("menu", "Feather", 25, "#FFFF")}
        </View>
        <Text className="text-[16px] font-normal w-[80vw] text-[#FFF] mx-[4vw]">
          {name}
        </Text>
      </View>
      <View className="relative right-[20vw]">
        {renderIcon("chevron-down", "Feather", 30, "#FFFF")}
      </View>
    </View>
  );
};

export const BarChart = ({ BarChartImage }: { BarChartImage: ImageProps; }) => {
  return (
    <View className=" mx-[5vw] mt-[4vh]">
      <Image source={BarChartImage} />
    </View>
  );
};
export const FinalText = () => {
  return (
    <View className=" mx-[5vw] mt-[4vh]">
      <Text
        className="text-[14px] font-normal w-[80vw]"
        style={{ color: appColors.gray }}
      >
        Nice work on your Income this month. Keep bringing al least $350 per
        month to keep this arrow up.
      </Text>
    </View>
  );
};
