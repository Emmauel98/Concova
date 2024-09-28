import { View, Text, Image } from "react-native";
import React from "react";
import ChartTitle from "./ChartTitle";
import CustomBox from "../common/CustomBox";
import images from "@src/constants/images";
import ChunkArray from "@src/utils/ChunkArray";
import {
  weeklyChallengeData,
  weeklyChallengePropType,
} from "@src/constants/data";
import { appColors } from "@src/constants/colors";

const WeeklyChallenge = () => {
  return (
    <CustomBox>
      <ChartTitle name="Weekly Challenges" />
      <View className=" flex-row justify-between mx-[4vw] mb-[5vh]">
        {weeklyChallengeData.map((data, index) => {
          return (
            <View key={index}>
              <Image source={data.image} />
              <Text className=" text-white text-[12px] font-normal w-[25vw] text-center">
                {data.name}
              </Text>
            </View>
          );
        })}
      </View>
    </CustomBox>
  );
};

export default WeeklyChallenge;
