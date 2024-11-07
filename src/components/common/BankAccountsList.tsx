import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import images from "@src/constants/images";
import { renderIcon } from "./renderIcon";

export type BankAccountsListPropType = {
  forWhat?: string;
  setShowOtherAccounts?: (value: boolean) => void;
  showOtherAccounts?: boolean;
};
const BankAccountsList = ({
  forWhat,
  setShowOtherAccounts,
  showOtherAccounts,
}: BankAccountsListPropType) => {
  const data = [
    {
      id: 1,
      image: images.transfer.concavo,
    },
    {
      id: 2,
      image: images.transfer.bam,
    },
    {
      id: 3,
      image: images.transfer.interbanco,
    },
  ];

  const [showTick, setShowTick] = useState(0);

  const ButtonPresshandler = (id: number) => {
    setShowTick(id - 1);
    if (forWhat === "transfer") {
      if (setShowOtherAccounts) {
        setShowOtherAccounts(!showOtherAccounts);
      }
    }
  };

  return (
    <View className="mb-[3vh]">
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            className="flex-row items-center justify-between px-[5vw] mx-[5vw] border border-[#ffffff11] rounded-xl mt-5
          bg-[#111116] pb-5"
            key={index}
            onPress={() => ButtonPresshandler(item.id)}
          >
            <View className=" flex-row  mx-[1vw] mt-5  items-center">
              <Image source={item.image} className=" w-[11vw] h-[5vh]" />
              <Text className=" text-[12px] font-normal text-white ml-4">
                Bam(Q 29,340.20)
              </Text>
            </View>
            <View
              className={`flex-row mt-4 ${
                showTick === index ? "block" : "hidden"
              }`}
            >
              {renderIcon("check", "MaterialCommunityIcons", 25, "#EDAF39")}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BankAccountsList;
