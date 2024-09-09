import { View, Text, Modal, TouchableOpacity, Button, Alert } from "react-native";
import React, { useState } from "react";
import useOnboardingContext from "@src/utils/Context";
import VerificationCode from "../UserAuthentication/VerificationCode";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationStackParamList } from "@src/utils/Types";
import { NavigationProp } from "@react-navigation/native";

const VerifyModal = () => {
  const { verify, setVerify } = useOnboardingContext();

  return (
    <View>
      <Modal visible={verify} transparent animationType="slide">
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}>
          <View className=" flex-1 flex-row h-screen justify-center items-center">
            <View className=" bg-[#181818] rounded-2xl w-[92vw]">
              <TouchableOpacity onPress={()=>setVerify(false)}>
                <Text className="text-right font-black text-[#ACADB9] text-[18px] p-[3vh]">
                  Close
                </Text>
              </TouchableOpacity>
              <Text className="text-[22px] font-semibold text-center ml-5 mb-[2vh] text-[#FFFFFF] mt-[5vh]">
                Verify Phone Number
              </Text>
              <Text className="text-center font-normal text-[#ACADB9] text-[14px] mb-[2vh]">
                We Have Sent Code To Your Phone Number
              </Text>
              <Text className="text-center font-semibold text-[#ACADB9] text-[15px] mb-[2vh] mt-[5vh]">
                +00 000000 0000
              </Text>
              <View>
                <VerificationCode />
              </View>
              <CustomButton title="Verify" BgColor="#1B1E20" color="#FFFFFF" />
              <View className="mb-[5vh]">
                <CustomButton
                  title="Send Again"
                  BgColor="#D09A34"
                  color="#000000"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VerifyModal;

const CustomButton = ({
  title,
  BgColor,
  color,
}: {
  title: string;
  BgColor: string;
  color: string;
}) => {


  const {  setVerify } = useOnboardingContext();
  const navigation = useNavigation<NavigationProp<AuthenticationStackParamList>>();


   const navigationHanler = ()=>{
    switch (title) {
      case 'Verify':
         setVerify(false);
          navigation.navigate('dasboard');
        break;
      case 'Send Again':
          Alert.alert('We send you a verifcation code');
        break;
      default:
        break;
    }
   };

  return (
    <View
      className="flex-row justify-center items-center mx-[5vw] py-[1.5vh] rounded-xl mb-[2vh]"
      style={{ backgroundColor: BgColor }}
    >
      <TouchableOpacity 
      className="w-full" style={{ backgroundColor: BgColor }}
      // onPress={()=> console.log("object")}
      >
        <Button title={title} color={color} onPress={navigationHanler} />
      </TouchableOpacity>
    </View>
  );
};
