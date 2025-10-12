import React, { useState } from "react";
import {  Image, ScrollView, View, TouchableOpacity } from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import { useMainAppContextFunc } from "@src/utils/Context";
import { renderIcon } from "@src/components/common/renderIcon";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import images from "@src/constants/images";
import ThemedText from "@src/components/Cards/ThemedText";
import MyCash from "./MyCash";
import CustomButton from "./CustomButton";
import MyInvites from "./MyInvites";

const Refer = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000] relative">
      <ScrollView>
        {/* <View className="absolute top-[-80vh] left-[-195vw]  z-30">
        <Image source={images.lifeStyle.glow_two} />
      </View> */}
        {/* <View className="absolute top-[45vh] left-[-155vw] z-10">
          <Image source={images.lifeStyle.glow} />
        </View> */}
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"Refer & Earn"} />
          <View className="bg-[#edae394d] flex-row items-center justify-between px-[5vw] py-2">
            <View className="flex-row items-center">
              <Image source={images.lifeStyle.profile} className=" mr-[5vw]" />
              <ThemedText
                name={"EDI got  $8 just now."}
                sizeNo={12}
                color="#FFFFFF"
                weight="normal"
              />
            </View>
            <ThemedText
              name={"Ranking >>"}
              sizeNo={12}
              color="#EDAF39"
              weight="normal"
            />
          </View>

          {/* Heading */}

          <View className="mx-[5vw] mt-[2vh]">
            <ThemedText
              name={"Invite new users"}
              sizeNo={40}
              color="#FFFFFF"
              weight="bold"
              styles={{
                textAlign: "center",
              }}
            />
            <View className="flex-row justify-center  items-center">
              <ThemedText
                name={"to"}
                sizeNo={40}
                color="#FFFFFF"
                weight="bold"
                styles={{
                  textAlign: "center",
                }}
              />
              <ThemedText
                name={"Get Cavocoin"}
                sizeNo={40}
                color="#EDAF39"
                weight="bold"
                styles={{
                  textAlign: "center",
                  marginLeft: 10,
                }}
              />
            </View>
          </View>

          <MyCash />

          <View className="  mt-[4vh] flex-row justify-center items-center">
            <CustomButton name="Invite Now" height={40} width={370} />
          </View>

          <View className=" relative z-50">
            <MyInvites />
          </View>
        </View>

        <TouchableOpacity className="bg-[#EDAF39] h-[5vh] mx-[5vw] mt-[2vh] flex-row justify-center
         items-center rounded-3xl mb-[5vh]">
          <View className=" flex-row justify-center items-center">
            <Image
              source={images.lifeStyle.share}
              className="w-[6vw] h-[3vh] mr-[2vw]"
            />
            <ThemedText
              name={"Share to Invite "}
              sizeNo={16}
              color="#000000"
              weight="normal"
              styles={{
                textAlign: "center",
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Refer;
