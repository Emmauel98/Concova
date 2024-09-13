import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import Header from "@src/components/common/Header";
import ChartBox from "@src/components/home/ChartBox";

const Home = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView className=" ">
        <View className=" bg-[#000000] h-screen mb-[20vh]">
          <Header />
          <Text className=" text-white px-[4vw] text-[24.14px] font-medium">
            Dashboard
          </Text>
          <ChartBox
            name="Net Cash"
            desc="Your Net Cash is trending down. Try to keep your expenses below $30 per
        day for the rest of the month to catch up with your target."
          />
          <ChartBox
            name="Net Debt"
            desc="our Net Debt is trending up. This month you purchased an article on
        Amazon that was not on your plan. If you reduce your expense on
        restaurants for the next two weekends, you can still catch up with your
        target."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
