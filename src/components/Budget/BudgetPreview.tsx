import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import Header from "../common/Header";
import HeaderTitle from "../AssetsComponent/Transfer/HeaderTitle";
import { renderIcon } from "../common/renderIcon";
import images from "@src/constants/images";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";



const BudgetPreview = () => {

  const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();

  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView>
        <View className=" bg-[#000000] h-screen">
          <Header />
          <HeaderTitle name={"Budget preview"} />
          <LinearGradient 
          colors={["#1e1e1e","#111116"]}
          // start={{ x: 0, y: 0 }}
          // end={{ x: 0.6, y: 0.6 }}
          className="bg-[#3131ca]  mx-[5vw] rounded-3xl border border-[#ffffff15]">
            <Text className="text-[16px] font-normal text-white p-5">
              Monthly Budget
            </Text>
            <View className=" flex-row items-center justify-between mx-[5vw] my-5">
              <View className=" flex-row items-center">
                <View className="bg-[#FFEADD] p-3 rounded-full">
                  <Image
                    source={images.budget.celebration}
                    className=" w-[6.5vw] h-[3vh]"
                  />
                </View>
                <View className="ml-3">
                  <Text className="text-[14px] font-semibold text-white">
                    Flexing Budget
                  </Text>
                  <Text className="text-[12px] font-normal mt-3 text-white">
                    Q140 daily
                  </Text>
                </View>
              </View>
              <View className=" ">
                <Text className="text-[14px] font-semibold text-white">
                  Flexing Budget
                </Text>
              </View>
            </View>
          </LinearGradient>
          {/* Budget Source */}
          <View className="mt-[3vh]">
            <BudgetSource
              name="Budget source"
              title="Concavo Bank"
              desc="Account balance: $24,987.56"
            />
            <BudgetSource
              name="Start date"
              title="Jan 16th - 24"
              desc="Monthly budget"
            />
            <BudgetSource
              name="Receive Alert"
              desc="Receive alert when it reaches a certain limit"
            />
          </View>
          {/* Button */}

          <TouchableOpacity
                className=" flex-row justify-center items-center absolute bottom-[9vh] left-[5vw]"
                onPress={() => {
                  Navigation.navigate('SeeBudget');
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

export default BudgetPreview;

const BudgetSource = ({
  name,
  desc,
  title,
}: {
  name: string;
  desc: string;
  title?: string;
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <View className="mb-[3vh]">
        <Text className="text-[16px] font-semibold text-white mx-[5vw]">
          {name}
        </Text>

        <View className="">
          <View className=" flex-row items-center justify-between mx-[5vw] my-5">
            <View className=" flex-row items-center">
              <View className="">
                {name === "Start date" ? (
                  <View className="bg-[#1A1B1F] p-3 rounded-lg">
                    {renderIcon(
                      "calendar-today",
                      "MaterialCommunityIcons",
                      30,
                      "#EDAF39"
                    )}
                  </View>
                ) : name === "Budget source" ? (
                  <Image
                    source={images.transfer.concavo}
                    className=" w-[11vw] h-[5.2vh]"
                  />
                ) : null}
              </View>
              <View
                className={`ml-3 ${
                  name === "Receive Alert" ? "relative ml-[0.5vw]" : "ml-3"
                }`}
              >
                <Text className="text-[14px] font-semibold text-white">
                  {title}
                </Text>
                <Text className="text-[12px] font-normal mt-3 text-[#ffffffbe]">
                  {desc}
                </Text>
              </View>
            </View>
            <View className=" ">
              {name === "Receive Alert" ? (
                <View>
                  <Switch
                    trackColor={{ false: "#1A1B1F", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#fff" : "#EDAF39"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              ) : (
                <TouchableOpacity>
                  <Text className="text-[12px] font-semibold text-[#EDAF39]">
                    Change
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
{
  /* <View className=" ">
          <Text></Text>
        </View> */
}
