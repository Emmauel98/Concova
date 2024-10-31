import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import images from "@src/constants/images";

const SuccessFulPayment = () => {
  return (
    <SafeAreaView>
      <View
        className=" h-screen w-screen flex-row justify-center items-center
       bg-[#05070D]"
      >
        <View>
          <View className="flex-row justify-center items-center">
            <Image
              source={images.transfer.tick_circle}
              className="w-[15vw] h-[8vh] ml-[10vw]"
            />
          </View>
          <Text className=" text-[#41D160] font-medium text-[18px]">
            SuccessFulPayment
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessFulPayment;
