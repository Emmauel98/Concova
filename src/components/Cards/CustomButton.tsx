import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";

export type CustomButtonPropType = {
  styles?: ViewStyle;
  name: string;
  action?: string;
  func?: (value: any) => void;
  backgroundColor?: string;
  color?: string;
};
const CustomButton = ({
  styles,
  name,
  action,
  func,
  backgroundColor,
  color,
}: CustomButtonPropType) => {
  const bgColor = backgroundColor ? backgroundColor : "#EDAF39";
  const textColor = color ? color : "#000";

  return (
    <TouchableOpacity
      className="flex-row justify-center items-center mt-[2vh] rounded-lg"
      onPress={func}
      style={[styles, { backgroundColor: bgColor }]}
    >
      <View
        className="  w-[90vw] h-[5vh] flex-row justify-center 
                  items-center rounded-lg
                  "
      >
        <Text
         style={[styles, { color: textColor }]}
         className="text-[16px] font-normal  text-center">
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
