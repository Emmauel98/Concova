import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomBox from "@src/components/common/CustomBox";
import { renderIcon } from "@src/components/common/renderIcon";
import { useMainAppContextFunc } from "@src/utils/Context";
import images from "@src/constants/images";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";

const TransferBoard = () => {
  const { selectBankName, setTransferTo, selectBankLogo } = useMainAppContextFunc();
  const placeHolder = selectBankName ? selectBankName : "Select Bank";
  const color = selectBankName ? "#ffff" : "#FFFFFF44";
  const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();
  const [ amount, setAmount ] = useState<string>();
  
 

  return (
    <CustomBox>
      <TextInput
        placeholder="Enter 10- digit Account Number"
        keyboardType="numeric"
        enterKeyHint="done"
        placeholderTextColor={"#FFFFFF44"}
        className=" w-full mx-[2vw] py-[2vh] text-white"
        maxLength={10}
        onChangeText={(text)=> setAmount(text)}
      />
      <View className=" h-[0.1vh] w-full bg-[#ffffff71]"></View>
      {selectBankName !== "Concavo" && (
        <Pressable
          onPress={() => {
            setTransferTo("Select a Bank");
            Navigation.navigate("select_bank");
          }}
        >
          <View className=" flex-row justify-between px-[3vw] py-[2vh]  rounded-3xl">
            <View className=" flex-row items-center">
              {selectBankLogo && (
                <Image
                  source={selectBankLogo}
                  className="w-[8.5vw] h-[4vh] mr-[2vw]"
                />
              )}
              <Text className="text-[16px] font-normal"
              style={{ color}}
              >
                {placeHolder}
              </Text>
            </View>
            <View>{renderIcon("chevron-right", "Feather", 30, "#FFFFFF")}</View>
          </View>
        </Pressable>
      )}
      <Pressable
      disabled={!amount ||  !selectBankLogo ? true : false}
        style={({ pressed }) => [
          {
            backgroundColor: pressed || (!amount || !selectBankLogo) ? "#573e10" : "#EDAF39",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            borderRadius: 5,
            marginVertical: 25,
          },
        ]}
        onPress={()=>{
          setTransferTo('Transfer to Bank')
         Navigation.navigate('Transfer_Amount')
        }}
      >
        <View
          className="w-[75vw] py-[1.4vh] rounded-lg flex-row justify-center
        items-center"
        >
          <Text className=" text-[16px] font-normal">Next</Text>
        </View>
      </Pressable>
    </CustomBox>
  );
};

export default TransferBoard;
// bg-[#EDAF39]
