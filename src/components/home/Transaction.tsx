import { View, Text, SectionList } from "react-native";
import React from "react";
import ChartTitle from "./ChartTitle";
import CustomBox from "../common/CustomBox";
import { renderIcon } from "../common/renderIcon";
import { appColors } from "@src/constants/colors";

const Transaction = () => {
  const temporaryData = [
    {
      date: "Today",
      data: [
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
      ],
    },
    {
      date: "June 13th",
      data: [
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
      ],
    },
  ];

  return (
    <CustomBox>
      <ChartTitle name="Transactions" />
      {temporaryData.map((data, index) => {
        const { title, desc, amount } = data.data[0];
        const {
          title: title_two,
          desc: desc_two,
          amount: amount_two,
        } = data.data[1];

        return (
          <View key={index}>
            <View>
              <Text className="text-white  text-[20px] font-normal px-[5vw] py-[2vh]">
                {data.date}
              </Text>
            </View>
            {data.data.map((item, index) => {
              return (
                <View
                  key={index}
                  className=" flex-row justify-between px-[5vw] mb-[2vh]"
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
                      className=" w-[12vw] py-[1vh] flex-row justify-center items-center rounded-full mr-[4vw]"
                    >
                      {renderIcon(
                        `${
                          item.amount.startsWith("-")
                            ? "arrow-up"
                            : "arrow-down"
                        }`,
                        "Feather",
                        28,
                        appColors.black
                      )}
                    </View>
                    <View>
                      <Text className="text-white text-[16px] font-normal">
                        {item.title}
                      </Text>
                      <Text className="text-[#79767D] text-[16px] font-normal">
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
          </View>
        );
      })}
    </CustomBox>
  );
};

export default Transaction;
