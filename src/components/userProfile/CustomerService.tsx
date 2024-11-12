import { View, Text, SectionList } from "react-native";
import React from "react";
import CustomBox from "../common/CustomBox";
import ChartTitle from "../home/ChartTitle";

const CustomerService = () => {
  return (
    <CustomBox>
      <ChartTitle name="Customer Service" />
      <View className=" w-[80vw] h-[0.5px] mx-[5vw] bg-[#ffffff6c]"></View>
      <ChartTitle name="Invitation" />
    </CustomBox>
  );
};

export default CustomerService;
