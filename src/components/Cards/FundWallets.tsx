import React, { useState } from "react";
import {
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import { useMainAppContextFunc } from "@src/utils/Context";
import { renderIcon } from "@src/components/common/renderIcon";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import EnterPasscode from "../AssetsComponent/Transfer/Withdraw/EnterPasscode";
import PaymentMethod from "./PaymentMethod";
import CustomButton from "./CustomButton";


const FundWallets = () => {
  const [modalVisbleForWithdrawPassCode, setModalVisibleForWithdrawPasscode] =
    useState(false);
  const { setWithdrawAmount, withdrawAmount } = useMainAppContextFunc();

  const action = () => {
    setModalVisibleForWithdrawPasscode(true);
  };

  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"Fund your Wallet"} />
        </View>

        <TouchableOpacity
          className="flex-row py-2 bg-[#111116] w-[30vw] justify-center items-center mx-[5vw] rounded-3xl"
          onPress={() => {

          }}
        >
          <Text className=" text-[14px] font-normal text-white">Debit</Text>
          {renderIcon("chevron-down", "MaterialCommunityIcons", 25, "#fff")}
        </TouchableOpacity>
        {/* Debit */}
        <View
          className=" bg-[#111116] w-[94vw] mx-[3vw] mt-[2vh]  
        rounded-xl  pl-[3vw]"
        >
          <Text className=" font-light text-[#ffffff5d] text-[12px] px-[5vw] py-4">
            Amount to be debited ($)
          </Text>
          <View className=" flex-row">
            <Text className="font-normal text-white text-[16px] pl-[5vw] py-4">
              Q
            </Text>
            <TextInput
              placeholder="5.00 - Q250,000.00"
              inputMode="numeric"
              keyboardType="numeric"
              placeholderTextColor={"#FFFFFF44"}
              className=" w-full mr-[2vw] py-[2vh] pl-2 text-white"
              enterKeyHint="done"
              value={withdrawAmount}
              onChangeText={(text) => setWithdrawAmount(text)}
            />
            <TouchableOpacity
              className="absolute right-[5vw] top-[2vh]"
              onPress={() => setWithdrawAmount("")}
            >
              {renderIcon("close", "MaterialCommunityIcons", 25, "#fff")}
            </TouchableOpacity>
          </View>
          {/* ..... */}
          <View className=" h-[1px] bg-gray-600 w-[88%] opacity-50 mx-[5vw] mb-5"></View>
          {/* ..... */}
          <View className=" mx-[5vw]">
            <View className="flex-row items-center gap-2 mb-5">
              {["100", "500", "1000", "5000"].map((data, index) => {
                return (
                  <TouchableOpacity
                    className=" p-3 bg-[#4D4D4D] w-[20vw] rounded-3xl"
                    key={index}
                  >
                    <Text className=" text-[#FFFFFF] text-[9px] font-light text-center">
                      Q {data}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          {/* ..... */}
        </View>

        {/* Credit */}

        <View
          className=" bg-[#111116] w-[94vw] mx-[3vw] mt-[2vh]  
        rounded-xl  pl-[3vw]"
        >
          <Text className=" font-light text-[#ffffff5d] text-[12px] px-[5vw] py-4">
            Amount to be credited ($)
          </Text>
          <View className=" flex-row pb-[0.5vh]">
            <Text className="font-normal text-white text-[16px] pl-[5vw] py-4">
              Q
            </Text>
            <TextInput
              placeholder="5.00 - Q250,000.00"
              inputMode="numeric"
              keyboardType="numeric"
              placeholderTextColor={"#FFFFFF44"}
              className=" w-full mr-[2vw] py-[2vh] pl-2 text-white"
              enterKeyHint="done"
              value={withdrawAmount}
              onChangeText={(text) => setWithdrawAmount(text)}
            />
            <TouchableOpacity
              className="absolute right-[5vw] top-[2vh]"
              onPress={() => setWithdrawAmount("")}
            >
              {renderIcon("close", "MaterialCommunityIcons", 25, "#fff")}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <PaymentMethod />
        </View>
        <View className=" mx-[5vw]">
          <CustomButton name="Continue" func={action} />
        </View>
        <EnterPasscode
          modalVisbleForWithdrawPassCode={modalVisbleForWithdrawPassCode}
          setModalVisibleForWithdrawPasscode={
            setModalVisibleForWithdrawPasscode
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FundWallets;
