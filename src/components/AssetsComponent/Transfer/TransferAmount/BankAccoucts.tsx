import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useRef } from "react";
import CustomModal from "@src/components/Modal/CustomModal";
import images from "@src/constants/images";
import { renderIcon } from "@src/components/common/renderIcon";

const BankAccoucts = ({
  billRef,
  setShowOtherAccounts,
  showOtherAccounts,
}: {
  billRef: any;
  setShowOtherAccounts: (value: boolean)=> void;
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
      {/* ..... */}
      {data.map((image, index) => {
        return (
          <TouchableOpacity
            className="flex-row items-center justify-between px-[5vw] mx-[5vw] border border-[#ffffff11] rounded-xl mt-5
          bg-[#111116] pb-5"
          key={index}
          onPress={()=> setShowOtherAccounts(!showOtherAccounts)}
          >
            <View className=" flex-row  mx-[1vw] mt-5  items-center">
              <Image
                source={image}
                className=" w-[11vw] h-[5vh]"
              />
              <Text className=" text-[12px] font-normal text-white ml-4">
                Bam(Q 29,340.20)
              </Text>
            </View>
            <View className="flex-row mt-4">
              {renderIcon("check", "MaterialCommunityIcons", 25, "#EDAF39")}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BankAccoucts;
