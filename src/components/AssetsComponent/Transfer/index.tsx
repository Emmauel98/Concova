import React from "react";
import { StatusBar, ScrollView, View, TouchableOpacity } from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import HeaderTitle from "./HeaderTitle";
import CustomNavigation from "./CustomNavigation";
import TransferBoard from "./TransferBoard";
import TransferHistory from "./TransferHistory";
import { useMainAppContextFunc } from "@src/utils/Context";


const Transfer = () => {
    const { TransferTo } =
    useMainAppContextFunc();

    const TransferToValidated = TransferTo === 'Select a Bank' ? 'Transfer to Bank' : TransferTo;


  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000] h-screen mb-[60vh]">
          <Header />
          <HeaderTitle name={TransferToValidated} />
          <CustomNavigation />
          <TransferBoard />
          <TransferHistory />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transfer;
