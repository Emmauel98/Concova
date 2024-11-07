import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "@src/constants/images";
import { useMainAppContextFunc } from "@src/utils/Context";
import { paymentDetailsData } from "@src/constants/data";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";


const SuccessFulPayment = () => {
  const { transferAccontNumber, transferAmount, selectBankName } =
    useMainAppContextFunc();
    const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();


  return (
    <SafeAreaView>
      <View
        className=" h-screen w-screen flex-row justify-center pt-10
       bg-[#05070D]"
      >
        <View>
          <View className="flex-row justify-center items-center">
            <Image
              source={images.transfer.tick_circle}
              className="w-[12vw] h-[5vh]"
            />
          </View>
          {/* .... */}
          <View className="flex-row justify-center items-center mt-3">
            <Text className=" text-[#41D160] font-medium text-[18px]">
              Payment Success!
            </Text>
          </View>
          {/* ..... */}
          <View className=" flex-row justify-center items-center mt-3">
            <Text className=" text-[40px] font-medium text-white">
              Q {Number(transferAmount).toLocaleString()}
            </Text>
          </View>
          {/* .... */}

          <View
            className=" px-[5vw] mx-[5vw] border border-[#ffffff11] rounded-xl mt-5
          bg-[#111116] pb-5 w-[80vw]"
          >
            <Text className=" text-white text-center font-medium text-[16px] my-2">
              Payment
            </Text>
            {/* .... */}
            <View>
              {paymentDetailsData.map((data, index) => {
                const value =
                  data.name === "Recipient Account Number"
                    ? transferAccontNumber
                    : data.name === "Recipient Bank"
                    ? selectBankName
                    : data.value;
                return (
                  <View
                    className=" flex-row justify-between mx-[2vw] items-center mt-5 "
                    key={index}
                  >
                    <Text className=" text-[12px] font-normal text-white">
                      {data.name}
                    </Text>
                    <Text className=" text-[12px] font-normal text-white">
                      {value}
                    </Text>
                  </View>
                );
              })}
            </View>
            {/* .... */}
            <View>
              <Text className="text-white opacity-10">
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
              </Text>
            </View>

            <View className=" flex-row justify-between mx-[2vw] items-center mt-3 ">
              <Text className=" text-[12px] font-normal text-white">
                Amount
              </Text>
              <Text className=" text-[12px] font-normal text-white">
                Q {Number(transferAmount).toLocaleString()}
              </Text>
            </View>
            <View className=" flex-row justify-between mx-[2vw] items-center mt-3 ">
              <Text className=" text-[12px] font-normal text-white">
                Payment Status
              </Text>
              <View className="bg-[#41d1953b] rounded-3xl relative left-3">
                <Text className=" text-[12px] font-normal text-[#41D195] p-2">
                  Success
                </Text>
              </View>
            </View>
          </View>
          {/* ................... */}
          <TouchableOpacity
            className=" border border-[#ffffff27] flex-row justify-center 
            items-center p-3 rounded-3xl mt-5 mx-[5vw]"
          >
            <Image
              source={images.transfer.save}
              className="w-[7vw] h-[3vh] mr-2"
            />
            <Text className="text-[14px] font-medium text-white">
              Save to photos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" border border-[#ffffff27] flex-row justify-center 
            items-center p-3 rounded-3xl mt-5 mx-[5vw]"
          >
            <Image
              source={images.transfer.share}
              className="w-[7vw] h-[3vh] mr-2"
            />
            <Text className="text-[14px] font-medium text-white">Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[1.4vh] rounded-lg flex-row justify-center
              items-center"
            style={{
              backgroundColor: "#EDAF39",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
              borderRadius: 5,
              marginVertical: 25,
            }}
            onPress={()=> Navigation.navigate('Main')}
          >
            <Text className=" text-[16px] font-normal">Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessFulPayment;
