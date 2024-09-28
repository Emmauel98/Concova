import { View, Text, type TextProps } from "react-native";
import React from "react";


export type ThemedTextProps = TextProps & {type: 'title' | 'Small'; text: string;};
  

export const CustomTextForAssets = ({type, text, style,}:ThemedTextProps)=>{

    const size = type === 'title' ? 24.4 : 14 ;
  
    return(
        <Text className=" text-[#FFFFFF]"
        style={[{ fontSize: size }, style]}
        >
           {text}
        </Text>
    )
  }