import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { renderIcon } from "../common/renderIcon";
import CreateBudgetListComp from "./CreateBudgetListComp";
import BankAccountsList from "../common/BankAccountsList";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";


const CreateBudgetModal = ({
  modalVisibleForCreatingBudget,
  setModalVisibleForCreatingBudget,
  setModalVisibleForBudgetCycle,
}: {
  modalVisibleForCreatingBudget: boolean;
  setModalVisibleForCreatingBudget: (value: boolean) => void;
  setModalVisibleForBudgetCycle: (value: boolean) => void;
}) => {
  const [showBankList, setShowBankList] = useState(false);
  const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();

  
  return (
    <View>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleForCreatingBudget}
        >
          <View className="h-screen w-screen bg-[#141414e1] pt-[22vh]">
            <ScrollView className="pb-[5vh]  pt-[3vh] h-[78vh]  bg-[#05070D] shadow-sm shadow-[#ffffff4b] rounded-[40px]">
              <View className=" flex-row ml-[5vw] items-center">
                <Text className=" text-[16px] font-bold text-white">
                  Create your budget
                </Text>
                <TouchableOpacity
                  className="absolute right-[5vw] top-[0vh]"
                  onPress={() => setModalVisibleForCreatingBudget(false)}
                >
                  {renderIcon("close", "MaterialCommunityIcons", 25, "#fff")}
                </TouchableOpacity>
              </View>
              <View className=" mt-[5vh] mx-[5vw]">
                <Text className="text-[#666666] text-[12px] font-light leading-5">
                  Set the maximum you’d like to spend each week or {"\n"} month?
                  Type in the amount below
                </Text>
              </View>
              <CreateBudgetListComp
                setShowBankList={setShowBankList}
                showBankList={showBankList}
                setModalVisibleForCreatingBudget={
                  setModalVisibleForCreatingBudget
                }
                setModalVisibleForBudgetCycle={setModalVisibleForBudgetCycle}
              />
              <View className=" ">{showBankList && <BankAccountsList />}</View>
              <TouchableOpacity
                className=" flex-row justify-center items-center mt-[2vh] mb-[8vh]"
                onPress={() => {
                  setModalVisibleForCreatingBudget(false);
                  Navigation.navigate('BudgetAmount');
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
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default CreateBudgetModal;
