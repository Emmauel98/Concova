import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@src/constants/images";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";

const SeeBudget = () => {

    const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();

    
  return (
    <View className="bg-[#EDAF39] h-screen w-screen flex-row justify-center items-center">
      <View className="">
      <View className=" flex-row justify-center items-center">
        <Image
          source={images.budget.Piggybank}
          className=" w-[40vw] h-[20vh]"
        />
      </View>
        <Text className="text-[15px] text-center font-medium text-black">
          Awesome! Your new Monthly Budget {'\n'} is up and running.
        </Text>
      </View>
      <TouchableOpacity
                className=" flex-row justify-center items-center absolute bottom-[9vh] left-[5vw]"
                onPress={() => {
                  Navigation.navigate('Budget');
                }}
              >
                <View
                  className=" bg-black  w-[90vw] h-[5vh] flex-row justify-center 
                  items-center rounded-lg
                  "
                >
                  <Text className="text-[16px] font-normal text-white text-center">
                    Continue
                  </Text>
                </View>
              </TouchableOpacity>
    </View>
  );
};

export default SeeBudget;
