import { View } from "react-native";
import React from "react";
import ChartTitle, { ChartDescription } from "./ChartTitle";
import Chart from "./Chart";

const ChartBox = ({name, desc}:{name: string; desc: string;}) => {
  return (
    <View 
      className=" bg-[#111116] w-[90vw] mx-[4vw] mt-[4vh]  
      rounded-3xl shadow-sm shadow-gray-600">
      <ChartTitle name={name} />
      <Chart />
      <ChartDescription desc={desc} />
    </View>
  );
};

export default ChartBox;
