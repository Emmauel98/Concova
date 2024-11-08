import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import ThemedText from "@src/components/Cards/ThemedText";
import InstallmentLaon from "./InstallmentLaon";
import CurrentOutStanding from "./CurrentOutStanding";



const Loan = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000] relative">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"Loan"} />
          <View className="flex-row mx-[5vw]  items-center">
            <ThemedText
              name={"Get A"}
              sizeNo={33}
              color="#FFFFFF"
              weight="bold"
              styles={{
                textAlign: "left",
              }}
            />
            <ThemedText
              name={"Quick Loan"}
              sizeNo={33}
              color="#EDAF39"
              weight="bold"
              styles={{
                textAlign: "left",
                marginLeft: 10,
              }}
            />
          </View>
          <View className="flex-row mx-[5vw]  items-center mt-[1vh]">
            <ThemedText
              name={"Simple, no collateral and no hidden fees"}
              sizeNo={14}
              color="#fff"
              weight="normal"
              styles={{
                textAlign: "left",
              }}
            />
          </View>
          <InstallmentLaon />
          <CurrentOutStanding />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Loan;
