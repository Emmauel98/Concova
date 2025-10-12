import { View, TouchableOpacity } from "react-native";
import React from "react";
import ThemedText from "@src/components/Cards/ThemedText";

export type CustomButtomPropType = { height: number; width: number, name: string; func?: (value: any)=> void; };
const CustomButton = ({ height, width, name, func }: CustomButtomPropType ) => {
  return (
    <View>
      <TouchableOpacity className="bg-[#EDAF39] flex-row justify-center items-center rounded-3xl" 
      onPress={func}
      style={{ height, width}}>
        <ThemedText
          name={name}
          sizeNo={16}
          color="#000000"
          weight="normal"
          styles={{
            textAlign: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
