import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomBox from "../common/CustomBox";
import { CustomTextForAssets } from "./CustomTextForAssets";
import { OthersData, OthersPropType } from "@src/constants/data";
import ChartTitle from "../home/ChartTitle";
import { renderIcon } from "../common/renderIcon";

const Others = () => {
  return (
      <CustomBox>
        <View className=" my-[2vh]">
          <ChartTitle name="Others" />
          {OthersData.map((data, index) => {
            const { feature, logo, desc } = data;
            return (
              <LinkedBanksContainer
                key={index}
                feature={feature}
                logo={logo}
                desc={desc}
              />
            );
          })}
        </View>
      </CustomBox>
  );
};

export default Others;

export const LinkedBanksContainer = ({
  feature,
  logo,
  desc,
}: OthersPropType) => {
  return (
    <View
      className="w-[80vw] ml-[2.3vw] mt-[2vh]  
           flex-row justify-between items-center "
    >
      <View className=" flex-row items-center">
        <View className=" bg-[#edae3949] px-[5px] h-[5vh] my-2 mx-3 rounded-xl justify-center">
          <Image
            source={logo}
            className="my-[2vh] mx-[2vw]"
          />
        </View>
        <View>
          <CustomTextForAssets
            type="title"
            text={feature}
            className=" font-semibold text-[14px]"
          />
          <CustomTextForAssets
            type="Small"
            text={desc}
            className=" font-medium text-[10px] text-[#5A5A65] mt-2"
          />
        </View>
      </View>
      <TouchableOpacity>{renderIcon("chevron-right", "Feather", 30, "#FFFFFF")}</TouchableOpacity>
    </View>
  );
};
