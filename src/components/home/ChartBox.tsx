import { View } from "react-native";
import React from "react";
import ChartTitle, { ChartDescription } from "./ChartTitle";
import Chart from "./Chart";
import CustomBox from "../common/CustomBox";

const ChartBox = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <CustomBox>
      <ChartTitle name={name} />
      <Chart />
      <ChartDescription desc={desc} />
    </CustomBox>
  );
};

export default ChartBox;
