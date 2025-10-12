import { View, Text } from 'react-native'
import React, { ReactNode } from 'react';
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';


interface CustomBoxProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
  }

const CustomBox = ({children, style}:CustomBoxProps) => {
  return (
    <View  className=" bg-[#111116] w-[94vw] mx-[3vw] mt-[4vh]  
    rounded-xl shadow-sm shadow-gray-600 pl-[3vw]"
    style={style}
    >
      {children}
    </View>
  );
};

export default CustomBox;