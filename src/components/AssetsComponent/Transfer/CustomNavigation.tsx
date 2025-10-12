import { View, TouchableOpacity } from 'react-native'
import React from 'react';
import CustomBox from '@src/components/common/CustomBox';
import { CustomTextForAssets } from '../CustomTextForAssets';
import { useMainAppContextFunc } from "@src/utils/Context";


const CustomNavigation = () => {

    const { customNavigationForTransferPst, setCustomNavigationForTransferPst, setIndicator } =
    useMainAppContextFunc();

  const text_color_one = customNavigationForTransferPst === 0 ? "#000" : "#FFF";
  const text_color_two = customNavigationForTransferPst !== 0 ? "#000" : "#FFF";

  const transferToBank = (name:string) =>{
    const transferPst = name === 'concavo' ? 50 : 0;
    const indicatorPst = name === 'concavo' ? '45%' : name === 'others' ? '1%' : '85.5%';
    setCustomNavigationForTransferPst(transferPst);
    setIndicator({left:indicatorPst });
  };
 

  return (
    <CustomBox>
    <View className="flex-row justify-center">
      <View
        className="flex-row justify-between  
      bg-[#1A1B1E] rounded-3xl w-[80vw] relative my-[2vh]"
      >
        <TouchableOpacity
          className="relative z-50 w-[50%] h-full py-[2vh] px-[6vw]"
          onPress={() => transferToBank('others')}
        >
          <CustomTextForAssets
            text="To other Bank"
            type="Small"
            style={{ color: text_color_one }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="relative z-50 w-[50%] h-full py-[2vh] px-[9vw]"
          onPress={() => transferToBank('concavo')}
        >
          <CustomTextForAssets
            text="To Concavo"
            type="Small"
            style={{ color: text_color_two }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-[#EDAF39] w-[40vw] h-[6vh] absolute 
          rounded-3xl"
          style={{ left: `${customNavigationForTransferPst}%` }}
        ></TouchableOpacity>
      </View>
    </View>
    <View className=' flex-row justify-center items-center pb-[2vh]'>
      <CustomTextForAssets
        text="Free Transfer"
        type="Small"
        className=" mr-[10vw] text-[10px]"
      />
      <CustomTextForAssets
        text="Instant & Zero Issue"
        type="Small"
        className=" ml-[10vw] text-[10px]"
      />
    </View>
  </CustomBox>
  )
}

export default CustomNavigation;