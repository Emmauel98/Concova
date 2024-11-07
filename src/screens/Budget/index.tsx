import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import Header from "@src/components/common/Header";
import HeaderTitle from "@src/components/AssetsComponent/Transfer/HeaderTitle";
import Availablebudget from "@src/components/Budget/Availablebudget";
import CreateBudget from "@src/components/Budget/CreateBudget";




const Budget = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000] h-screen">
          <Header />
          <HeaderTitle name={"Budget"} />
          <Availablebudget />
          <CreateBudget />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Budget;


