import React, { useState } from "react";
import { Image, ScrollView, View, TouchableOpacity } from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import ThemedText from "@src/components/Cards/ThemedText";
import { renderIcon } from "../common/renderIcon";
import Advert from "../common/Advert";

const Invitation = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000] relative">
      <ScrollView>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={"Invitation"} />

          <Advert />

          <View className="flex-row justify-center mx-[5vw]  items-center mt-[2vh]">
            <ThemedText
              name={"Get "}
              sizeNo={33}
              color="#FFFFFF"
              weight="bold"
              styles={{
                textAlign: "left",
              }}
            />
            <ThemedText
              name={"600"}
              sizeNo={33}
              color="#EDAF39"
              weight="bold"
              styles={{
                textAlign: "left",
                marginLeft: 10,
              }}
            />
          </View>
          <View className="flex-row justify-center mx-[5vw] items-center mt-[1vh]">
            <ThemedText
              name={"cavocoin"}
              sizeNo={33}
              color="#FFFFFF"
              weight="bold"
              styles={{
                textAlign: "left",
              }}
            />
          </View>
          <View
            className="bg-[#111116]  mx-[5vw] mt-[2vh] py-[2vh] rounded-xl border
          border-[#ffffff17] relative h-[22vh] z-50"
          >
            <View
              className="w-[88vw] mx-[3vw] mt-[0vh]  
              rounded-xl  pl-[3vw]"
            >
              <ThemedText
                name={"Invite 1 New User"}
                sizeNo={12}
                color="#ffffff5d"
                weight="light"
                styles={{
                  textAlign: "center",
                  marginLeft: 1,
                  marginTop: 1,
                }}
              />
              <View className=" h-[1px] bg-gray-600 w-[88%] opacity-50 mx-[2vw] my-5"></View>
              <View className=" flex-row justify-center items-center  mx-[5vw]">
                <ThemedText
                  name={"72MM9K"}
                  sizeNo={44}
                  color="#ffffff"
                  weight="medium"
                  styles={{
                    textAlign: "center",
                    marginLeft: 1,
                    marginTop: 1,
                  }}
                />
                <TouchableOpacity className=" ml-[4vw]">
                  {renderIcon(
                    "content-copy",
                    "MaterialCommunityIcons",
                    23,
                    "#fff"
                  )}
                </TouchableOpacity>
              </View>
              {/* ..... */}

              {/* ..... */}
              <View className="mt-5">
                <ThemedText
                  name={"Your Friends can get extra bonus with your code"}
                  sizeNo={12}
                  color="#ffffff5d"
                  weight="light"
                  styles={{
                    textAlign: "center",
                    marginLeft: 1,
                    marginTop: 1,
                  }}
                />
              </View>
              {/* ..... */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Invitation;
