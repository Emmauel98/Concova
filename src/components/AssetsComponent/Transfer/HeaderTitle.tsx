import { View, Text, TouchableOpacity , ImageProps} from "react-native";
import React from "react";
import { renderIcon } from "@src/components/common/renderIcon";
import { useNavigation } from "@react-navigation/native";
import { useMainAppContextFunc } from "@src/utils/Context";



const HeaderTitle = ({ name }: { name: string;}) => {

    const Navigation = useNavigation();
    const { setTransferTo, TransferTo } =
    useMainAppContextFunc();

  return (
    <TouchableOpacity className=" flex-row  px-[3vw] py-[2vh]  rounded-3xl"
    onPress={()=> {
        if (TransferTo === 'Select a Bank') {
            setTransferTo('Transfer to Bank');
        }
        Navigation.goBack();
    }}
    >
      <View>{renderIcon("chevron-left", "Feather", 30, "#FFFFFF")}</View>
    <Text className="text-white text-[24px] font-medium">{name}</Text>
  </TouchableOpacity>
  )
}

export default HeaderTitle