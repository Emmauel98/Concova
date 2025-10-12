import React, { useState } from "react";
import { ScrollView, View, Image } from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import { renderIcon } from "@src/components/common/renderIcon";
import images from "@src/constants/images";
import ThemedText from "@src/components/Cards/ThemedText";
import List from "@src/components/LifeStyle/List";
import Activities from "@src/components/LifeStyle/Activities";



const LifeStyle = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <View className="mx-[5vw] my-[2vh]">
            <ThemedText
              name={"Lifestyle"}
              size="medium"
              color="#FFFFFF"
              weight={"medium"}
            />
          </View>
        </View>
        <View className=" flex-row justify-between mx-[5vw]">
          <View className="">
            <ThemedText
              name={"567"}
              sizeNo={28}
              color="#FFFFFF"
              weight={"medium"}
              styles={{ fontWeight: 800}}
            />
             <ThemedText
              name={"1 Cavo coin per Q10"}
              sizeNo={14}
              color="#FFFFFF"
              weight={"normal"}
            />
          </View>
          <View>
            <Image source={images.lifeStyle.concavo}  />
          </View>
          <View>
          </View>
        </View>
        <List  />
        <Activities />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LifeStyle;
