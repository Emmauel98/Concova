import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import Header from "@src/components/common/Header";
import TotalAssets from "@src/components/AssetsComponent/TotalAssets";
import { CustomTextForAssets } from "@src/components/AssetsComponent/CustomTextForAssets";
import MoneyTransfer from "@src/components/AssetsComponent/MoneyTransfer";
import images from "@src/constants/images";
import LinkedBanks from "@src/components/AssetsComponent/LinkedBanks";
import Others from "@src/components/AssetsComponent/Others";





const Assets = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000] h-screen mb-[60vh]">
          <Header />
          <CustomTextForAssets text="Assets" type="title"  />
          <TotalAssets />
          <MoneyTransfer />
          <LinkedBanks />
          <Others />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Assets;

