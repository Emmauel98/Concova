import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import { useMainAppContextFunc } from "@src/utils/Context";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import TrendComponent from "@src/components/home/TrendComponent";
import { appColors } from "@src/constants/colors";
import images from "@src/constants/images";

const Expenses = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"Expenses"} />
          <TrendComponent
            name="Expenses"
            amount="$1,000 / month"
            desc="Luis, Your total income is up. keep letting it come in every months."
            color={appColors.pink}
            handImage={images.expenses.handPink}
            BarChartImage={images.expenses.barChartPink}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Expenses;
