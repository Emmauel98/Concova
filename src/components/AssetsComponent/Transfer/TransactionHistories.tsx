import { View, Text, ScrollView } from "react-native";
import React from "react";
import { appColors } from "@src/constants/colors";
import ChartTitle from "@src/components/home/ChartTitle";
import CustomBox from "@src/components/common/CustomBox";
import { renderIcon } from "@src/components/common/renderIcon";

const TransactionHistories = () => {
  const temporaryData = [
    {
      title: "Transfer",
      desc: "Incoming transfer",
      amount: "+ Q312.90",
    },
    {
      title: "Health",
      desc: "Pharmacy",
      amount: "- Q312.90",
    },
    {
      title: "Transfer",
      desc: "OutGoing transfer",
      amount: "- Q312.90",
    },
    {
      title: "Transef",
      desc: "Olami@contact",
      amount: "- Q312.90",
    },
    {
      title: "Transfer",
      desc: "Incoming transfer",
      amount: "+ Q312.90",
    },
    {
      title: "Health",
      desc: "Pharmacy",
      amount: "- Q312.90",
    },
    {
      title: "Transfer",
      desc: "OutGoing transfer",
      amount: "- Q312.90",
    },
    {
      title: "Transef",
      desc: "Olami@contact",
      amount: "- Q312.90",
    },
  ];
  return (
    <ScrollView className=" mx-[2vw] pt-[3vh] h-[60vh] pb-[60vh]">
      {temporaryData.map((item, index) => {
        return (
          <View
            key={index}
            className=" flex-row justify-between pr-[2vw] my-[2vh]"
          >
            <View className=" flex-row">
              <View
                style={{
                  backgroundColor: `${
                    item.amount.startsWith("-")
                      ? appColors.yellow
                      : appColors.lightBlue
                  }`,
                }}
                className=" w-[10vw] h-[4.6vh] flex-row justify-center items-center rounded-full mr-[4vw]"
              >
                {renderIcon(
                  `${item.amount.startsWith("-") ? "arrow-up" : "arrow-down"}`,
                  "Feather",
                  28,
                  appColors.black
                )}
              </View>
              <View>
                <Text className="text-white text-[16px] font-normal">
                  {item.title}
                </Text>
                <Text className="text-[#79767D] text-[16px] font-normal mt-[1vh]">
                  {item.desc}
                </Text>
              </View>
            </View>
            <View>
              <Text className="text-white text-[16px] font-normal">
                {item.amount}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TransactionHistories;
