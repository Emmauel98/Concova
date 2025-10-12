import React, { useState } from "react";
import {
  ScrollView,
  View,
} from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import { renderIcon } from "@src/components/common/renderIcon";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import images from "@src/constants/images";
import ThemedText from "@src/components/Cards/ThemedText";

import AllTransaction from "@src/components/home/AllTransaction";

const CardTransactions = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"Card Transactions"} />
        </View>
        <AllTransaction />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardTransactions;
