import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";
import ChartTitle from "./ChartTitle";
import CustomBox from "../common/CustomBox";
import images from "@src/constants/images";
import ChunkArray from "@src/utils/ChunkArray";
import { TrendsData, trendsPropType } from "@src/constants/data";
import { appColors } from "@src/constants/colors";
import useNavigate from "@src/constants/navigate";



const Trends = () => {
  return (
    <CustomBox>
      <ChartTitle name="Trends" />
      <Box />
    </CustomBox>
  );
};

export default Trends;

const Box = () => {
  const rows = ChunkArray(TrendsData, 2) as trendsPropType[][];

  const navigate = useNavigate();

  const action = (name: string)=>{
    switch (name) {
      case "Income":
        navigate('Income')
        break;
    
      case "Debt":
        navigate('Debt');
        break;

      case "Expenses":
        navigate('Expenses');
        break;

      case "Net cash":
        navigate('NetCash');
        break;
    
      default:
        break;
    }
  }

  return (
    <View className=" mr-[2vw]">
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-between">
          {row.map((data, index) => {
            const image =
              data.type === "Income"
                ? images.trends.handYellow
                : data.type === "Debt"
                ? images.trends.handGreen
                : images.trends.handPink;


            const color =
              data.type === "Income"
                ? appColors.gray
                : data.type === "Debt"
                ? appColors.green
                : appColors.pink;

            return (
              <TouchableOpacity
              onPress={()=> action(data.type)} 
              className=" bg-[#1B1B1F] flex-row justify-between p-[20px] mb-[3vh]" key={index}>
                <View className={`bg-[#0C0C11] mr-[1vw]  rounded-full ${Platform.OS === 'android' ? "px-[2px]" : "p-[10px]"}`}>
                  <Image source={image} />
                </View>
                <View>
                  <Text className=" text-[14px] font-normal text-[#FFFFFF]">{data.type}</Text>
                  <Text  className=" text-[12px] mt-[1vh] font-normal" style={{ color}}>{data.amount}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};
