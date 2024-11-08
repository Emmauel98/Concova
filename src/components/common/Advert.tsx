import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import ThemedText from "../Cards/ThemedText";
import images from "@src/constants/images";


const Advert = () => {
  return (
    <View className="bg-[#EDAF39] flex-row justify-center items-center">
        <View className="mr-5">
           <Image source={images.lifeStyle.mockup} className=" w-[25vw] h-[8vh]" />
        </View>
      <View>
        <ThemedText
          name={"Get your Concavo ATM Card"}
          sizeNo={11}
          color="#000000"
          weight="medium"
          styles={{
            textAlign: "center",
            marginLeft: 1,
            marginTop: 1,
          }}
        />
        <ThemedText
          name={"Enjoy Free Withdrawals and free SMS Alerts"}
          sizeNo={6}
          color="#000000"
          weight="medium"
          styles={{
            textAlign: "center",
            marginLeft: 1,
            marginTop: 1,
          }}
        />
      </View>
      <TouchableOpacity className=" border border-black px-5 py-2 rounded-3xl ml-5">
        <ThemedText
          name={"Go"}
          sizeNo={6}
          color="#000000"
          weight="normal"
          styles={{
            textAlign: "center",
            marginLeft: 1,
            marginTop: 1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Advert;
