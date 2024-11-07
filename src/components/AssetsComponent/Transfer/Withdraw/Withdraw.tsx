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
import HeaderTitle from "../HeaderTitle";
import { renderIcon } from "@src/components/common/renderIcon";
import BankAccountWithdrawal from "./BankAccountWithdrawal";
import DisplayAmount from "./DisplayAmount";
import EnterPasscode from "./EnterPasscode";

const Withdraw = () => {
  const [modalVisbleForWithdrawDetails, setModalVisibleForWithdrawDetails] =
    useState(false);
  const [modalVisbleForWithdrawPassCode, setModalVisibleForWithdrawPasscode] =
    useState(false);
  const { setWithdrawAmount, withdrawAmount } = useMainAppContextFunc();

  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"withdraw"} />
        </View>
        <View
          className=" bg-[#111116] w-[94vw] mx-[3vw] mt-[2vh]  
        rounded-xl  pl-[3vw]"
        >
          <Text className=" font-light text-[#ffffff5d] text-[12px] px-[5vw] py-4">
            Amount ($)
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
              onSubmitEditing={() => {
                if (withdrawAmount.length > 0) {
                  setModalVisibleForWithdrawDetails(true);
                  // setOpenCalendar(true);
                }
              }}
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
            <View className="flex-row text-[12px] mb-5">
              <Text className="text-[#7B7B7B]">Concavo Balance: </Text>
              <Text className="text-[#7B7B7B]">Q29,000</Text>
            </View>
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
        <View>
          <BankAccountWithdrawal />
        </View>
        <DisplayAmount
          modalVisbleForWithdrawDetails={modalVisbleForWithdrawDetails}
          setModalVisibleForWithdrawDetails={setModalVisibleForWithdrawDetails}
          setModalVisibleForWithdrawPasscode={
            setModalVisibleForWithdrawPasscode
          }
        />
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

export default Withdraw;
