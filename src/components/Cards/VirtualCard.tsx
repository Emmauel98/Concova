import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import images from "@src/constants/images";
import ThemedText from "@src/components/Cards/ThemedText";

const VirtualCard = () => {
  return (
    <ImageBackground
      source={images.cards.IronBody}
      resizeMode="contain"
      className="relative mx-[5vw] border border-[#ffffff25] flex-1 
      justify-center rounded-3xl overflow-hidden h-[25vh]"
    >
      <View className="flex-row items-center p-5">
        <Image
          source={images.cards.concavoWhite}
          className="w-[10vw] h-[5vh] mr-1"
        />
        <ThemedText
          name={"CONCAVO"}
          size="medium"
          color="#FFFFFF"
          weight="semibold"
        />
      </View>
      <ImageBackground
        source={images.cards.VirualCardBottom}
        resizeMode='contain'
        className="flex-row justify-between items-center mt-[8vh] h-[7.8vh] 
        w-full rounded-lg relative z-30"
      >
        <View className="ml-[3vw]">
          <ThemedText
            name={"...... 9982"}
            size="medium"
            color="#FFFFFF"
            weight="semibold"
          />
        </View>
        <Image
          source={images.cards.visa}
          className="w-[18vw] h-[5vh] mr-[3vw]"
        />
      </ImageBackground>
        <Image
          source={images.cards.concavoGold}
          className="w-[50vw] h-[40vh] absolute right-[-20vw]  top-[3vh]"
        />
    </ImageBackground>
  );
};

export default VirtualCard;
