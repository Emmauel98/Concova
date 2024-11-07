import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import Header from "../common/Header";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import { renderIcon } from "../common/renderIcon";
import images from "@src/constants/images";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";

const BudgetAmount = () => {
  const [budgetAmt, setBudgetAmt] = useState<number>(0);

  const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();


  const handleDecrement = () => {
    setBudgetAmt((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrement = () => {
    setBudgetAmt((prev) => prev + 1);
  };

  const handleInputChange = (value: string) => {
    const numericValue = parseFloat(value);
    console.log(typeof numericValue, numericValue);
    if (!isNaN(numericValue)) {
      setBudgetAmt(numericValue);
    } else {
      setBudgetAmt(0); // Reset to 0 if the input is invalid
    }
  };

  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000] h-screen">
          <Header />
          <HeaderTitle name={"Set a budget amount"} />
          <View className=" mx-[5vw]">
            <Text className="text-[12px] font-normal text-[#ffffff62]">
              Selected account
            </Text>
            <View
              className="bg-[#111116] my-[1vh] h-[8vh] px-5 
            rounded-xl flex-row items-center justify-between"
            >
              <View className="flex-row items-center">
                <Image
                  source={images.transfer.concavo}
                  className=" w-[11vw] h-[5.1vh]"
                />
                <Text className="text-[11px] font-semibold text-white ml-[3vw]">
                  Concavo
                </Text>
              </View>
              <View className="flex-row">
                <Text className="text-white mr-[10vw] ">Q 29,340.20</Text>
                <TouchableOpacity
                  className={`absolute right-[0vw] top-[-1vh]`}
                  //   onPress={() => ButtonPressHandler(item.title)}
                >
                  {renderIcon(
                    "chevron-down",
                    "MaterialCommunityIcons",
                    33,
                    "#fff"
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Set Amount */}
          <View className="mx-[5vw]">
            <Text className="font-normal text-[16px] text-white text-center py-5">
              Set Amount(Q)
            </Text>
            <View className="flex-row justify-center items-center">
              <TouchableOpacity
                className="bg-[#49391F] px-4 py-2 rounded-lg"
                onPress={handleDecrement}
              >
                <Text className=" font-medium text-[20px] text-white">-</Text>
              </TouchableOpacity>
              <View className="relative">
                {/* <Text className=" font-medium text-[20px] text-white absolute left-[14vw] top-[2vh] z-20">Q</Text> */}
                <TextInput
                  inputMode="numeric"
                  value={budgetAmt?.toString()}
                  className="bg-[#1A1B1F] w-[30vw] h-[7vh] rounded-lg mx-[5vw]
                 relative text-center text-white"
                  placeholder="Q 0"
                  placeholderTextColor={"#4D4D4D"}
                  onChangeText={(text) => handleInputChange(text)}
                />
              </View>
              <TouchableOpacity
                className="bg-[#49391F] px-4 py-2 rounded-lg"
                onPress={handleIncrement}
              >
                <Text className=" font-medium text-[20px] text-white">+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* custom Amt */}

          <View className="flex-row items-center justify-center gap-2 my-5">
            {["100", "500", "1000", "5000"].map((data, index) => {
              const amt = Number(data);
              return (
                <TouchableOpacity
                  className=" py-3 px-4 bg-[#4D4D4D] rounded-3xl"
                  key={index}
                  onPress={() => setBudgetAmt(amt)}
                >
                  <Text className=" text-[#FFFFFF] text-[9px] font-light text-center">
                    Q{data}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {/*  Text */}

          <View className="flex-row justify-center items-center">
            <Text className="text-white text-center text-[12px] leading-4">
              Based on your input, you would have $29,340.20 {'\n'} left out of
              $29,340.20 in your Concavo Bank {'\n'} account
            </Text>
          </View>

          {/* Next Button */}

          <TouchableOpacity
                className=" flex-row justify-center items-center absolute bottom-[10vh] left-[5vw]"
                onPress={() => {
                  Navigation.navigate('BudgetPreview');
                }}
              >
                <View
                  className=" bg-[#EDAF39]  w-[90vw] h-[5vh] flex-row justify-center 
                  items-center rounded-lg
                  "
                >
                  <Text className="text-[16px] font-normal text-black text-center">
                    Continue
                  </Text>
                </View>
              </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BudgetAmount;
