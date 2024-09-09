import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationStackParamList } from "@src/utils/Types";

export type CustomButtonProps = {
  text: string;
  color: string;
  width: number;
  marginLeft?: number;
};

const CustomButton = ({
  text,
  color,
  width,
  marginLeft,
}: CustomButtonProps) => {
  const navigation =
    useNavigation<StackNavigationProp<AuthenticationStackParamList>>();

  const navigationHandler = () => {
    const navigateTo = text === "Login" ? "verify" : "signup";
    navigation.navigate(navigateTo);
  };

  return (
    <View style={{ marginLeft }}>
      <TouchableOpacity onPress={navigationHandler}>
        {/* <View
          className="px-[6vw] py-[1.5vh] rounded-[60%]"
          style={{ backgroundColor: color, width }}
        >
          <Text className=" text-[20px] font-normal text-center">{text}</Text>
        </View> */}
        <View
        className="px-[6vw] py-[1.5vh] rounded-3xl"
        style={{ backgroundColor: color, width }}
        >
            <Text className=" text-[20px] font-normal text-center">{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

// style={{ marginLeft }} onPress={navigationHandler}
