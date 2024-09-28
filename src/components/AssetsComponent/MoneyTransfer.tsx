import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomBox from "../common/CustomBox";
import { CustomTextForAssets } from "./CustomTextForAssets";
import { MoneyTransferOptions } from "@src/constants/data";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavprops } from "@src/navigation/DashboardStack"; 
import { useMainAppContextFunc } from "@src/utils/Context";
import images from "@src/constants/images";


const MoneyTransfer = () => {
  const Navigation =  useNavigation<StackNavigationProp<StackNavprops>>();
  const { setTransferTo,setCustomNavigationForTransferPst, setIndicator, setSelectBank } =
    useMainAppContextFunc();

  const NavigationHandler = (name: string)=>{
      switch (name) {
        case 'To Bank':
          setSelectBank('');
          setCustomNavigationForTransferPst(0);
          setIndicator({left: '1%' });
          setTransferTo('Transfer to Bank');
           Navigation.navigate('transfer');
          break;
        case 'To Concavo':
          setSelectBank('Concavo');
          setCustomNavigationForTransferPst(50);
          setIndicator({left: '45%' });
          setTransferTo('Transfer to Concavo');
          Navigation.navigate('transfer');
          break;
      
        default:
          break;
      }
  };

 
  return (
    <CustomBox>
      <View className="px-[20px] py-[3vh]">
        <CustomTextForAssets
          type="title"
          text="Money Transfer"
          className=" font-normal"
        />
      </View>
      <View className=" flex-row justify-between mx-[3vw] mb-[3vh]">
        {MoneyTransferOptions.map((data, index) => {
          return (
            <TouchableOpacity key={index} onPress={()=> NavigationHandler(data.name)}>
              <View className=" flex-row justify-center items-center">
                <Image source={data.image} className=" mb-[2vh]" />
              </View>
              <CustomTextForAssets
                type="Small"
                text={data.name}
                className="text-center mr-[10px] text-[#B6B6B6]"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </CustomBox>
  );
};

export default MoneyTransfer;
