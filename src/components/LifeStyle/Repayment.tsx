import React, { useState } from "react";
import { Image, ScrollView, View, TouchableOpacity } from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import ThemedText from "@src/components/Cards/ThemedText";
import InstallmentLaon from "./InstallmentLaon";
import CurrentOutStanding from "./CurrentOutStanding";
import Advert from "../common/Advert";


const Repayment = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000] relative">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"Repayment"} />
           
           <Advert />
          <View
            className="bg-[#111116]  mx-[5vw] mt-[2vh] py-[2vh] rounded-xl border
          border-[#ffffff17] relative h-[50vh] z-50"
          >
            {/* <View className="bg-[#3F3F3F] h-[1px] rounded-3xl w-[80vw] mx-[5vw] mt-[2vh]"></View> */}

            <View
              className="w-[88vw] mx-[3vw] mt-[0vh]  
              rounded-xl  pl-[3vw]"
            >
              <ThemedText
                name={"Repayment Amount ($)"}
                sizeNo={12}
                color="#ffffff5d"
                weight="light"
                styles={{
                  textAlign: "left",
                  marginLeft: 1,
                  marginTop: 1,
                }}
              />
              <View className=" flex-row my-[2vh] mx-[5vw]">
                <ThemedText
                  name={"Q 40,000"}
                  sizeNo={20}
                  color="#ffffff"
                  weight="medium"
                  styles={{
                    textAlign: "center",
                    marginLeft: 1,
                    marginTop: 1,
                  }}
                />
              </View>
              {/* ..... */}
              <View className=" h-[1px] bg-gray-600 w-[88%] opacity-50 mx-[2vw] mb-5"></View>
              {/* ..... */}
              <View className=" mx-[5vw] ">
                <View className="flex-row items-center gap-2 mb-5">
                  {["All", "500", "1000", "5000"].map((data, index) => {
                    return (
                      <TouchableOpacity
                        className=" p-2 bg-[#4D4D4D] w-[15vw] rounded-3xl"
                        key={index}
                      >
                        <ThemedText
                          name={`Q ${data}`}
                          sizeNo={7}
                          color="#ffffff"
                          weight="light"
                          styles={{
                            textAlign: "center",
                            marginLeft: 1,
                            marginTop: 1,
                          }}
                        />
                        {/* <Text className=" text-[#FFFFFF] text-[9px] font-light text-center">
                      Q {data}
                    </Text> */}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              {/* ..... */}
            </View>
            <List />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Repayment;

const List = () => {
  const data = [
    {
      name: "Principal",
      cost: "Q40,000.00",
    },
    {
      name: "Interest",
      cost: "Q7,000",
    },
    {
      name: "service Fee",
      cost: "Q2,000",
    },
    {
      name: "Overdue Management fee",
      cost: "Q0.00",
    },
  ];
  return (
    <View>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            className=" flex-row justify-between items-center mx-[6vw] mt-[2vh]"
          >
            <ThemedText
              name={`${item.name}`}
              sizeNo={12}
              color="#ffffff98"
              weight="normal"
              styles={{
                textAlign: "center",
                marginLeft: 1,
                marginTop: 1,
              }}
            />
            <ThemedText
              name={`${item.cost}`}
              sizeNo={12}
              color="#ffffff"
              weight="normal"
              styles={{
                textAlign: "center",
                marginLeft: 1,
                marginTop: 1,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};
