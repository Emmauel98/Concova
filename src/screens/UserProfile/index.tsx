import { View, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import images from "@src/constants/images";
import ThemedText from "@src/components/Cards/ThemedText";
import TotalAssets from "@src/components/AssetsComponent/TotalAssets";
import Transaction from "@src/components/userProfile/Transaction";
import Bank_Cards from "@src/components/userProfile/Bank&Cards";
import CustomerService from "@src/components/userProfile/CustomerService";



const Userprofile = () => {
  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView className=" ">
        <View>
          <View
          className=" flex-row mx-[5vw] mt-[3vh] mb-[2vh]"
          //   onPress={()=> navigate('Userprofile')}
          >
            <Image source={images.profile.avatar} className="rounded-full w-[20vw] h-[9vh] mr-[2vw]" />
            <ThemedText
              name={"Luis Marinelli"}
              sizeNo={16}
              color="#FFFFFF"
              weight="medium"
              styles={{ textAlign: "center", marginTop: 30 }}
            />
          </View>
        </View>
        <TotalAssets />
        <Transaction />
        <Bank_Cards />
        <CustomerService />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Userprofile;
