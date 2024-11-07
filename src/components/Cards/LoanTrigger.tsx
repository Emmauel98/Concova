import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@src/constants/images";
import ThemedText from "@src/components/Cards/ThemedText";
import { renderIcon } from "../common/renderIcon";

const LoanTrigger = () => {
  return (
    <View
      className="flex-row justify-between items-center bg-[#111116] mx-[5vw] px-[5vw]
     py-[3vh] rounded-3xl"
    >
      <View className="flex-row items-center">
        <View className=" bg-[#edae3936] p-3 rounded-lg">
          <Image source={images.cards.loan} className=" w-[8vw] h-[4vh]" />
        </View>
        <View>
          <ThemedText
            name={"Loans"}
            size="small"
            weight="normal"
            styles={{ textAlign: "left", marginLeft: 15 }}
          />
          <ThemedText
            name={"Apply for Loan"}
            size="small"
            weight="light"
            color="#5A5A65"
            styles={{ textAlign: "left", marginLeft: 15, marginTop: 3 }}
          />
        </View>
      </View>
      <TouchableOpacity className="">
        {renderIcon("chevron-right", "Feather", 33, "#5A5A65")}
      </TouchableOpacity>
    </View>
  );
};

export default LoanTrigger;
