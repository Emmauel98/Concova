import { View, Image, ImageBackground } from "react-native";
import React from "react";
import images from "@src/constants/images";
import ThemedText from "@src/components/Cards/ThemedText";

const Activities = () => {
  return (
    <ImageBackground
      source={images.lifeStyle.festival}
      resizeMode="contain"
      className="relative mx-[5vw] border border-[#ffffff25] flex-1 
      rounded-3xl overflow-hidden h-[42vh] pt-[2vh]"
    >
      <View className="flex-row justify-between items-center">
        <View className="bg-[#151B23] px-4 py-2 rounded-xl mx-[5vw]">
          <ThemedText
            name={"12"}
            sizeNo={18}
            color="#FFFFFF"
            weight="bold"
            styles={{ textAlign: "center", marginTop: 10 }}
          />
          <ThemedText
            name={"May"}
            sizeNo={11}
            color="#C1CAD5"
            weight="normal"
            styles={{ textAlign: "center", marginTop: 10 }}
          />
        </View>
        <View className="flex-row mx-[5vw]">
          <View className="bg-[#5077aa] p-4 rounded-full mr-2">
            <Image source={images.lifeStyle.heart} />
          </View>
          <View className="bg-[#5077aa] p-4 rounded-full">
            <Image source={images.lifeStyle.external} />
          </View>
        </View>
      </View>
      <View className="mx-[5vw] bg-[#00000052] flex-row items-center
       w-[35vw] py-2 rounded-3xl relative bottom-[-15vh]">
          <View className="mx-2">
            <Image source={images.lifeStyle.concavo} className=" w-[7vw] h-[3vh]"/>
          </View>
          <ThemedText
            name={"10 Cavo coin"}
            sizeNo={11}
            color="#FFFFFF"
            weight="normal"
            styles={{ textAlign: "left", marginTop: 1 }}
          />
        </View>
      <View className="mx-[5vw] relative bottom-[-15vh]">
          <ThemedText
            name={"Fest in Guate"}
            sizeNo={18}
            color="#000000"
            weight="bold"
            styles={{ textAlign: "left", marginTop: 10 }}
          />
          <ThemedText
            name={"Exclusive Daily offers - sign up at no cost"}
            sizeNo={11}
            color="#000000"
            weight="normal"
            styles={{ textAlign: "left", marginTop: 10 }}
          />
        </View>
    </ImageBackground>
  );
};

export default Activities;
