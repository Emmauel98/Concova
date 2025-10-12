import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import { useMainAppContextFunc } from "@src/utils/Context";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import TrendComponent from "@src/components/home/TrendComponent";
import { appColors } from "@src/constants/colors";
import images from "@src/constants/images";

const Income = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"Income"} />
          <TrendComponent
          name="Income"
          amount="$1,000 / month"
          desc="Luis, Your total income is up. keep letting it come in every months."
          color={appColors.yellow}
          handImage={images.expenses.handYellow}
          BarChartImage={images.expenses.barChartYellow}
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Income;
