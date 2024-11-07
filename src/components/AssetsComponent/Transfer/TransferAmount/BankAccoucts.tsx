import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useRef } from "react";
import CustomModal from "@src/components/Modal/CustomModal";
import images from "@src/constants/images";
import { renderIcon } from "@src/components/common/renderIcon";
import BankAccountsList from "@src/components/common/BankAccountsList";

const BankAccoucts = ({
  billRef,
  setShowOtherAccounts,
  showOtherAccounts,
}: {
  billRef: any;
  setShowOtherAccounts: (value: boolean) => void;
  showOtherAccounts: boolean;
}) => {
  const data = [
    images.transfer.concavo,
    images.transfer.bam,
    images.transfer.interbanco,
  ];
  return (
    <View className="pb-[5vh] pt-[5vh] bg-[#05070D] shadow-sm shadow-white rounded-3xl">
      <View className=" flex-row justify-center items-center">
        <Text className=" text-[16px] font-normal text-white">
          Select Payment Methods
        </Text>
        <TouchableOpacity
          className="absolute right-[5vw] top-[0vh]"
          onPress={() => billRef.current?.close()}
        >
          {renderIcon("close", "MaterialCommunityIcons", 25, "#fff")}
        </TouchableOpacity>
      </View>
      <BankAccountsList
        forWhat="transfer"
        setShowOtherAccounts={setShowOtherAccounts}
        showOtherAccounts={showOtherAccounts}
      />
    </View>
  );
};

export default BankAccoucts;
