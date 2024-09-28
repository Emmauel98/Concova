import { View, Text } from "react-native";
import React from "react";
import ChartTitle from "./ChartTitle";
import CustomBox from "../common/CustomBox";


const Budget = () => {
  return (
    <CustomBox>
      <ChartTitle name="My Budgets" />
      <View className="ml-[5vw] mb-[2vh]">
        <CustomText type="small" text="You have" />
        <CustomText type="big" text="Q 29,880" />
        <CustomText type="small" text="Left out of Q 80,888 budgeted" />
      </View>
      <CustomLoad />
    </CustomBox>
  );
};

export default Budget;

const CustomText = ({
  type,
  text,
}: {
  type: "big" | "small";
  text: string;
}) => {
  const size = type === "big" ? 20 : 16;
  return (
    <View>
      <Text
        className="text-[#FFFFFF] font-normal text-[16px] py-[1vh]"
        style={{ fontSize: size }}
      >
        {text}
      </Text>
    </View>
  );
};
const CustomLoad = () => {
  const width = '30%';

    return (
    <View className=" bg-[#32fc6475] w-[75vw] mb-[2vh] mx-[5vw] h-[1vh] rounded-lg">
      <View className=" bg-[#32FC65]   h-[1vh] rounded-lg"
      style={{ width}}
      ></View>
    </View>
  );
};



