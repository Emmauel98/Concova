import { View, Text, SectionList } from "react-native";
import React from "react";
import CustomBox from "../common/CustomBox";
import ChartTitle from "../home/ChartTitle";

const Bank_Cards = () => {
  return (
    <CustomBox>
      <ChartTitle name="Bank and Cards" />
      <View className=" w-[80vw] h-[0.3px] mx-[5vw] bg-[#ffffff6c]"></View>
      <ChartTitle name="Concavo ATM card" />
    </CustomBox>
  );
};

export default Bank_Cards;
