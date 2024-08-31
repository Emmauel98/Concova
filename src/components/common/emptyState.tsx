import { View, Text } from "react-native";
import React from "react";

const EmptyState = ({text}:{text: string}) => {
  return (
    <View
      className=" bg-white shadow-sm shadow-slate-100 rounded-xl"
    >
      <Text className=" text-center p-[8%] text-[14px] font-medium text-[#66635A]">
        {text}
      </Text>
    </View>
  );
};

export default EmptyState;
