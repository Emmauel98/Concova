import { View, Text, TouchableOpacity , ImageProps} from "react-native";
import React from "react";
import { renderIcon } from "../common/renderIcon";

const ExpensesTitle = ({ name }: { name: string;}) => {
  return (
    <View className=" flex-row  px-[3vw] py-[2vh]  rounded-3xl">
      <TouchableOpacity>
        <View>{renderIcon("chevron-left", "Feather", 30, "#FFFFFF")}</View>
      </TouchableOpacity>
      <Text className="text-white text-[24px] font-medium">{name}</Text>
    </View>
  );
};

export default ExpensesTitle;
