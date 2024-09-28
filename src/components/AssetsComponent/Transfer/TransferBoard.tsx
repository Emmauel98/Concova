import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import CustomBox from "@src/components/common/CustomBox";
import { renderIcon } from "@src/components/common/renderIcon";
import { useMainAppContextFunc } from "@src/utils/Context";
import images from "@src/constants/images";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";

const TransferBoard = () => {
  const { selectBank, setTransferTo } = useMainAppContextFunc();
  const placeHolder = selectBank ? selectBank : "Select Bank";
  const active = selectBank ? true : false;
  const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();

  return (
    <CustomBox>
      <TextInput
        placeholder="Enter 10- digit Account Number"
        keyboardType="numeric"
        placeholderTextColor={"#FFFFFF44"}
        className=" w-full mx-[2vw] py-[2vh]"
      />
      <View className=" h-[0.1vh] w-full bg-[#ffffff71]"></View>
      <Pressable disabled={active}>
        <View className=" flex-row justify-between px-[3vw] py-[2vh]  rounded-3xl">
          <View className=" flex-row items-center">
            {selectBank && (
              <Image
                source={images.home.fancylogo}
                className="w-[30%] mr-[2vw]"
              />
            )}
            <Text className="text-[#FFFFFF44] text-[16px] font-normal">
              {placeHolder}
            </Text>
          </View>
          <View>{renderIcon("chevron-right", "Feather", 30, "#FFFFFF")}</View>
        </View>
      </Pressable>
      <Pressable
        //   disabled
        onPress={()=> {
            setTransferTo('Select a Bank')
            Navigation.navigate('select_bank');
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#573e10" : "#EDAF39",
            // backgroundColor: disabled ? '#573e10' : pressed ? '#573e10' : '#EDAF39',
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            borderRadius: 5,
            marginVertical: 25,
          },
        ]}
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
