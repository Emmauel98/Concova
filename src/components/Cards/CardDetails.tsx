import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import Header from "@src/components/common/Header";
import HeaderTitle from "@src/components/AssetsComponent/Transfer/HeaderTitle";
import CustomBox from "../common/CustomBox";
import ThemedText from "@src/components/Cards/ThemedText";
import { renderIcon } from "../common/renderIcon";
import { cardDetailsData } from "@src/constants/data";

const CardDetails = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000] h-screen">
          <Header />
          <HeaderTitle name={"Your Virtual card details"} />
          <CustomBox>
            <View>
              {cardDetailsData.map((item, index) => {
                return (
                  <View
                    className=" flex-row justify-between items-center mx-[5vw] my-[2vh]"
                    key={index}
                  >
                    <View>
                      <ThemedText
                        name={item.name}
                        sizeNo={16}
                        color="#FFFFFF"
                        weight="normal"
                        styles={{ textAlign: "left", marginTop: 1 }}
                      />
                      <ThemedText
                        name={item.desc}
                        sizeNo={12}
                        color="#FFFFFF"
                        weight="normal"
                        styles={{ textAlign: "left", marginTop: 8 }}
                      />
                    </View>
                    <TouchableOpacity
                      className=""
                      //   onPress={() => setShowDeleteCardModal(!showDeleteCardModal)}
                    >
                      {renderIcon(
                        "content-copy",
                        "MaterialCommunityIcons",
                        23,
                        "#fff"
                      )}
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </CustomBox>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardDetails;
