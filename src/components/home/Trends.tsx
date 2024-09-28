import { View, Text, Image } from "react-native";
import React from "react";
import ChartTitle from "./ChartTitle";
import CustomBox from "../common/CustomBox";
import images from "@src/constants/images";
import ChunkArray from "@src/utils/ChunkArray";
import { TrendsData, trendsPropType } from "@src/constants/data";
import { appColors } from "@src/constants/colors";


const Trends = () => {
  return (
    <CustomBox>
      <ChartTitle name="Trends" />
      <Box />
    </CustomBox>
  );
};

export default Trends;

const Box = () => {
  const rows = ChunkArray(TrendsData, 2) as trendsPropType[][];

  return (
    <View className=" mr-[2vw]">
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-between">
          {row.map((data, index) => {
            const image =
              data.type === "Income"
                ? images.trends.handYellow
                : data.type === "Debt"
                ? images.trends.handGreen
                : images.trends.handPink;


            const color =
              data.type === "Income"
                ? appColors.gray
                : data.type === "Debt"
                ? appColors.green
                : appColors.pink;

            return (
              <View className=" bg-[#1B1B1F] flex-row justify-between p-[20px] mb-[3vh]" key={index}>
                <View className=" bg-[#0C0C11] p-[10px] rounded-full mr-[1vw]">
                  <Image source={image} />
                </View>
                <View>
                  <Text className=" text-[14px] font-normal text-[#FFFFFF]">{data.type}</Text>
                  <Text  className=" text-[12px] mt-[1vh] font-normal" style={{ color}}>{data.amount}</Text>
                </View>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};
