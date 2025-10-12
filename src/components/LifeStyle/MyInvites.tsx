import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ThemedText from "@src/components/Cards/ThemedText";
import CustomButton from "./CustomButton";
import images from "@src/constants/images";

const MyInvites = () => {
  return (
    <View
      className="bg-[#111116]  mx-[5vw] mt-[2vh] py-[2vh] rounded-xl border
   border-[#ffffff17] relative h-[30vh] z-50"
    >
      <View className=" flex-row justify-between mx-[5vw] items-center">
        <View className=" flex-row items-center">
          <ThemedText
            name={"My Invitees (56)"}
            sizeNo={19}
            color="#fff"
            weight="medium"
            styles={{
              textAlign: "center",
            }}
          />
        </View>
        <ThemedText
          name={"Reward History >>"}
          sizeNo={12}
          color="#EDAF39"
          weight="normal"
        />
      </View>

      <View className="bg-[#3F3F3F] h-[1px] rounded-3xl w-[80vw] mx-[5vw] mt-[2vh]"></View>

      <View className="mx-[5vw] mt-[2vh]">
        <View className="flex-row  items-center my-[2vh]">
          <Image
            source={images.lifeStyle.tuki}
            className="w-[11vw] h-[5vh] mr-[2vw]"
          />
          <ThemedText
            name={"Tuki Joshua"}
            sizeNo={13}
            color="#fff"
            weight="normal"
            styles={{
              textAlign: "center",
            }}
          />
        </View>
        <View className="flex-row  items-center my-[2vh]">
          <Image
            source={images.lifeStyle.tuki}
            className="w-[11vw] h-[5vh] mr-[2vw]"
          />
          <ThemedText
            name={"Adejare Lekan"}
            sizeNo={13}
            color="#fff"
            weight="normal"
            styles={{
              textAlign: "center",
            }}
          />
        </View>
      </View>

      
    </View>
  );
};

export default MyInvites;
