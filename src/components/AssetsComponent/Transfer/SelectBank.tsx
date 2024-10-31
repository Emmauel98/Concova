import React from "react";
import {
  SectionList,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import HeaderTitle from "./HeaderTitle";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMainAppContextFunc } from "@src/utils/Context";
// import { TextInput } from "react-native-gesture-handler";
import { renderIcon } from "@src/components/common/renderIcon";
import {
  recentTransferData,
  recentTransfeVerticalData,
} from "@src/constants/data";


const SelectBank = () => {
  const { TransferTo, setSelectBankLogo, setSelectBankName } =
    useMainAppContextFunc();
  const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();
 


  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <View>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={TransferTo} />
        </View>
        <View
          className="bg-[#1E1E1E] bg-opacity-70 w-[90%] flex-row py-[20px]
       mx-[5vw] rounded-3xl px-[5px] relative"
        >
          <View className="absolute left-[5vw] top-[2vh]">
            {renderIcon("search", "Feather", 23, "#fff")}
          </View>
          <TextInput
            placeholder="Name or number of phone"
            placeholderTextColor={"#79767D"}
            className=" w-full h-full pl-[15vw]"
          />
        </View>
        {/* ..... */}
        <View className=" flex-row justify-between items-center mt-[3vh] mx-[5vw] mb-[20px]">
          {recentTransferData.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectBankLogo(data.logo);
                  setSelectBankName(data.name);
                  Navigation.goBack();
                }}
              >
                <View className="flex-row justify-center items-center">
                  <Image source={data.logo} className="h-[5vh] w-[11vw]" />
                </View>
                <View className="mt-[1vh]">
                  <Text className="text-[#FFFFFF] font-normal text-[12px] text-center">
                    {data.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* .......... */}

        <SectionList
        className="h-[50vh] "
          sections={recentTransfeVerticalData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectBankLogo(item.logo);
                setSelectBankName(item.name);
                Navigation.goBack();
              }}
              className="flex-row  items-center my-4 mx-[5vw]"
            >
              <View className="flex-row  items-center">
                <Image source={item.logo} className="h-[5vh] w-[11vw]" />
              </View>
              <View className="mt-[1vh] ml-[4vw]">
                <Text className="text-[#FFFFFF] font-normal text-[16px] text-center">
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="text-white text-[16px] bg-[#57575762] py-2 px-[7vw]">
              {title.toUpperCase()}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectBank;
