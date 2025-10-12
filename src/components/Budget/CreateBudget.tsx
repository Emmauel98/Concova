import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import images from "@src/constants/images";
import { LinearGradient } from "expo-linear-gradient";
import CreateBudgetModal from "./CreateBudgetModal";
import ModalForBudgetCycle from "./ModalForBudgetCycle";

const CreateBudget = () => {
  const data = [0];
  const [modalVisibleForCreatingBudget, setModalVisibleForCreatingBudget] =
    useState<boolean>(false);

  const [modalVisibleForBudgetCycle, setModalVisibleForBudgetCycle] =
    useState<boolean>(false);

  return (
    <View>
      {/* 636363 */}
      {data.length > 0 ? (
        <LinearGradient
          colors={["#111116", "#111116", "#636363"]}
          start={{ x:0.7, y:0.66}}

          className=" mt-[8vh]  py-[5vh] mx-[5vw] rounded-3xl"
        >
          <View>
            <View className="flex-row justify-between mx-[4vw] items-center my-[3vh]">
              <Text className="text-[14px] text-white font-medium">
                What’s left to spend
              </Text>
              <Text className="text-[20px] text-white font-medium">
                Q 5,000
              </Text>
            </View>
            <View className="bg-[#05070D] mx-[4vw] p-3 rounded-xl">
              <Text className="text-[14px] text-white font-medium mx-[2vw] my-[1vh]">
                Monthly Budget
              </Text>
              <View className="flex-row justify-between mx-[2vw] items-center my-[1vh]">
                <Text className="text-[12px] text-[#636363] font-normal">
                  You’ve already spent
                </Text>
                <Text className="text-[12px] text-[#636363] font-normal">
                  Spend Limit per Day
                </Text>
              </View>
              <View className="flex-row justify-between mx-[2vw] items-center my-[1vh]">
                <Text className="text-[20px] text-white font-meduim">Q0</Text>
                <Text className="text-[20px] text-white font-meduim">Q400</Text>
              </View>
              <View className="mx-[2vw] bg-[#edae3948] w-[73vw] h-[2vh] rounded-3xl my-[1vh]">
                <View
                  className="bg-[#EDAF39] rounded-3xl h-full"
                  style={{ width: `${"10%"}` }}
                ></View>
              </View>
              <View className="mx-[2vw] my-[1vh]">
                <Text className="text-[12px] text-[#636363] font-normal">
                  Cool! let's keep your expense below the budget
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={["#1e1e1e", "#111116"]}
          className=" mt-[8vh]  py-[10vh] mx-[8vw] rounded-3xl "
        >
          <View className=" flex-row justify-center items-center">
            <Image
              source={images.budget.Piggybank}
              className=" w-[40vw] h-[34vw]"
            />
          </View>
          <Text className="text-[24px] font-normal text-white text-center">
            Welcome{" "}
          </Text>
          <Text className="text-[12px] font-normal text-white text-center mt-[2vh]">
            This is an overview of all your budgets, {"\n"} so come back later{" "}
          </Text>
          <TouchableOpacity
            className=" flex-row justify-center items-center mt-[2vh]"
            onPress={() => setModalVisibleForCreatingBudget(true)}
          >
            <View
              className=" bg-[#EDAF39]  w-[40vw] h-[5vh] flex-row justify-center 
          items-center rounded-lg
          "
            >
              <Text className="text-[16px] font-normal text-black text-center">
                Create budget
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      )}
      <CreateBudgetModal
        modalVisibleForCreatingBudget={modalVisibleForCreatingBudget}
        setModalVisibleForCreatingBudget={setModalVisibleForCreatingBudget}
        setModalVisibleForBudgetCycle={setModalVisibleForBudgetCycle}
      />
      <ModalForBudgetCycle
        modalVisibleForBudgetCycle={modalVisibleForBudgetCycle}
        setModalVisibleForBudgetCycle={setModalVisibleForBudgetCycle}
        setModalVisibleForCreatingBudget={setModalVisibleForCreatingBudget}
      />
    </View>
  );
};

export default CreateBudget;
