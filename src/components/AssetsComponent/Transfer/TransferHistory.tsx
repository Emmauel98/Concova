import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomBox from "@src/components/common/CustomBox";
import { renderIcon } from "@src/components/common/renderIcon";
import { useMainAppContextFunc } from "@src/utils/Context";
import TransactionHistories from "./TransactionHistories";


const TransferHistory = () => {
  const { indicator, setIndicator } = useMainAppContextFunc();

  const ViewTrasactions = (name: string) => {
    const indicatorPst =
      name === "concavo" ? "45%" : name === "today" ? "1%" : "85.5%";
    setIndicator({ left: indicatorPst });
  };


  return (
    <CustomBox>
      <View className=" flex-row justify-between mx-[2vw] relative py-[1vh]">
        <TouchableOpacity
          onPress={() => ViewTrasactions("today")}
        >
            <Text className="text-white text-[16px] font-normal">Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ViewTrasactions("concavo")}>
          <Text className="text-white text-[16px] font-normal">
            Concavo accounts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" flex-row"
          onPress={() => ViewTrasactions("all")}
        >
          <Text className="text-white text-[16px] font-normal">All</Text>
          <View>{renderIcon("chevron-right", "Feather", 25, "#FFFFFF")}</View>
        </TouchableOpacity>
        <View
          className="h-[0.5vh] w-[10vw] bg-[#EDAF39] rounded-full absolute bottom-0"
          style={indicator}
        ></View>
      </View>
      <TransactionHistories />
    </CustomBox>
  );
};

export default TransferHistory;
