import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useRef } from "react";
import CustomModal from "@src/components/Modal/CustomModal";
import images from "@src/constants/images";
import { renderIcon } from "@src/components/common/renderIcon";
import BankAccountsList from "@src/components/common/BankAccountsList";

const BankAccountWithdrawal = () => {
  const data = [
    images.transfer.concavo,
    images.transfer.bam,
    images.transfer.interbanco,
  ];

  return (
    <View className="pb-[5vh] pt-[2vh] ">
      <Text className="text-[16px] font-normal text-white mx-[5vw]">
        Select Bank
      </Text>
      <BankAccountsList />
      <View className="flex-row items-center justify-between mx-[5vw] mt-[1vh]">
        <View className=" bg-[#EDAF39] px-3 py-2 rounded-full">
          <Text className=" font-medium">+</Text>
        </View>
        <Text className="text-[#EDAF39]">Link new bank card/bank account</Text>
        <View>
          {renderIcon("chevron-right", "MaterialCommunityIcons", 25, "#fff")}
        </View>
      </View>
    </View>
  );
};

export default BankAccountWithdrawal;
