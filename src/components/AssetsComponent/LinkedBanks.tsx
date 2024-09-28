import { View, Image } from "react-native";
import React from "react";
import CustomBox from "../common/CustomBox";
import images from "@src/constants/images";
import { CustomTextForAssets } from "./CustomTextForAssets";
import { LinkedBankData, linkedBankPropType } from "@src/constants/data";
import ChartTitle from "../home/ChartTitle";


const LinkedBanks = () => {
  return (
    <CustomBox>
      <View className=" mt-[2vh]">
        <LinkedBanksContainer
          bank="Concavo"
          logo={images.LinkedBank.logo}
          amount="Q29,340.20"
          percentage="25%"
        />
      </View>
      <View className=" my-[2vh]">
      <ChartTitle name="Linked Banks" />
        {LinkedBankData.map((data, index) => {
          const { bank, logo, amount, percentage } = data;
          return (
            <LinkedBanksContainer
              key={index}
              bank={bank}
              logo={logo}
              amount={amount}
              percentage={percentage}
            />
          );
        })}
      </View>
    </CustomBox>
  );
};

export default LinkedBanks;

export const LinkedBanksContainer = ({
  bank,
  logo,
  amount,
  percentage,
}: linkedBankPropType) => {
  const graph =
    bank === "Concavo"
      ? images.LinkedBank.linegraphyellow
      : images.LinkedBank.linegraphgreen;
  return (
    <View
      className=" bg-[#1A1B1F] w-[80vw] ml-[2.3vw] mt-[2vh]  
        rounded-xl shadow-sm shadow-[#4b556379] flex-row
         justify-between items-center "
    >
      <Image source={logo} className="my-[2vh] mx-[2vw] w-[10vw] h-[4.7vh]" />
      <CustomTextForAssets
        type="title"
        text={bank}
        className=" font-semibold text-[12.93px]"
      />
      <Image source={graph} className="my-[2vh] mx-[2vw]" />
      <CustomTextForAssets
        type="title"
        text={amount}
        className=" font-medium text-[13.9px]"
      />
      <View className=" bg-[#4E4E4E] p-1 ml-2 right-[1vw]">
        <CustomTextForAssets
          type="Small"
          text={percentage}
          className=" font-medium text-[9.42px] text-center text-white"
        />
      </View>
    </View>
  );
};
