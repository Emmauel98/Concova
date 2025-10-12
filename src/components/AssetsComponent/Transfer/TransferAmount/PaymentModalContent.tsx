import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { renderIcon } from "@src/components/common/renderIcon";
import images from "@src/constants/images";
import { useMainAppContextFunc } from "@src/utils/Context";

const PaymentModalContent = ({
  billRef,
  setShowOtherAccounts,
  showOtherAccounts,
  setModalVisible,
}: {
  billRef: any;
  setShowOtherAccounts: (value: boolean) => void;
  showOtherAccounts: boolean;
  setModalVisible: (value: boolean) => void;
}) => {
  const { transferAccontNumber, transferAmount } = useMainAppContextFunc();

  return (
    <View className="pb-[5vh] pt-[5vh] bg-[#05070D] shadow-sm shadow-white rounded-3xl">
      {/* ................... */}
      <View className=" flex-row justify-center items-center">
        <Text className=" text-[16px] font-normal text-white">Payment</Text>
        <TouchableOpacity
          className="absolute right-[5vw] top-[0vh]"
          onPress={() => billRef.current?.close()}
        >
          {renderIcon("close", "MaterialCommunityIcons", 25, "#fff")}
        </TouchableOpacity>
      </View>
      {/* ................... */}
      <View className=" flex-row justify-center items-center mt-5">
        <Text className=" text-[40px] font-medium text-white">
          Q {Number(transferAmount).toLocaleString()}
        </Text>
      </View>
      {/* ................... */}
      <View
        className=" px-[5vw] mx-[5vw] border border-[#ffffff11] rounded-xl mt-5
                bg-[#111116] pb-5"
      >
        <View className=" flex-row justify-between mx-[2vw] items-center mt-5 ">
          <Text className=" text-[12px] font-normal text-white">Amount</Text>
          <Text className=" text-[12px] font-normal text-white">
            Q {Number(transferAmount).toLocaleString()}
          </Text>
        </View>
        <View className=" flex-row justify-between mx-[2vw] items-center mt-5">
          <Text className=" text-[12px] font-normal text-white">
            Account Number
          </Text>
          <Text className=" text-[12px] font-normal text-white">
            {transferAccontNumber}
          </Text>
        </View>
        <View className=" flex-row justify-between mx-[2vw] items-center mt-5">
          <Text className=" text-[12px] font-normal text-white">
            Amount Name
          </Text>
          <Text className=" text-[12px] font-normal text-white">Sam Larry</Text>
        </View>
      </View>
      {/* ................... */}
      <View className=" flex-row justify-between mx-[6vw] mt-5 items-center">
        <Text className=" text-[16px] font-normal text-white">Payment</Text>
        <TouchableOpacity
          className="flex-row"
          onPress={() => {
            setShowOtherAccounts(!showOtherAccounts);
            // billRef.current?.close();
          }}
        >
          <Text className=" text-[16px] font-normal text-white">All</Text>
          {renderIcon("chevron-right", "MaterialCommunityIcons", 25, "#fff")}
        </TouchableOpacity>
      </View>
      {/* ................... */}

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
      {/* ................... */}
      <TouchableOpacity
        className="py-[1.4vh] rounded-lg flex-row justify-center
              items-center"
        style={{
          backgroundColor: "#EDAF39",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
          borderRadius: 5,
          marginVertical: 25,
        }}
        onPress={() => {
          billRef.current?.close();
          setModalVisible(true);
        }}
      >
        <Text className=" text-[16px] font-normal">Confirm to pay</Text>
      </TouchableOpacity>
      {/* ................... */}
    </View>
  );
};

export default PaymentModalContent;
