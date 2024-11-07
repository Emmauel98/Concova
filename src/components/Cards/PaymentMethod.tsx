import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { renderIcon } from "../common/renderIcon";
import images from "@src/constants/images";
import BankAccountsList from "../common/BankAccountsList";



const PaymentMethod = () => {

    const [ showBankList, setShowbankList] = useState<boolean>(false);
    
  return (
    <View>
      <View className=" flex-row justify-between mx-[6vw] mt-5 items-center">
        <Text className=" text-[16px] font-normal text-white">Payment</Text>
        <TouchableOpacity
          className="flex-row"
          onPress={() => {
            setShowbankList(!showBankList);
          }}
        >
          <Text className=" text-[16px] font-normal text-white">All</Text>
          {renderIcon(`${showBankList ? "chevron-down" : "chevron-right"}`, "MaterialCommunityIcons", 25, "#fff")}
        </TouchableOpacity>
      </View>
      {
        showBankList ? <BankAccountsList /> :

      <View
        className="flex-row items-center justify-between px-[5vw] mx-[5vw] border border-[#ffffff11] rounded-xl mt-5
        bg-[#111116] pb-5"
      >
        <View className=" flex-row  mx-[1vw] mt-5  items-center">
          <Image source={images.transfer.bam} className=" w-[11vw] h-[5vh]" />
          <Text className=" text-[12px] font-normal text-white ml-4">
            Bam(Q 29,340.20)
          </Text>
        </View>
        <View className="flex-row mt-4">
          {renderIcon("check", "MaterialCommunityIcons", 25, "#EDAF39")}
        </View>
      </View>
      }
    </View>
  );
};

export default PaymentMethod;
