import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CreateBudgetModal from "./CreateBudgetModal";
import ModalForBudgetCycle from "./ModalForBudgetCycle";

const Availablebudget = () => {
  const data = [0];

  const [modalVisibleForCreatingBudget, setModalVisibleForCreatingBudget] =
    useState<boolean>(false);

  const [modalVisibleForBudgetCycle, setModalVisibleForBudgetCycle] =
    useState<boolean>(false);

  return (
    <View>
      {data.length > 0 ? (
        <View className=" flex-row justify-center items-center">
          <View>
            <Text className="text-[28px] font-semibold text-white text-center mt-3">
              Q 5,000
            </Text>
            <Text className="text-[14px] font-normal text-white text-center mt-3">
              Out of Q 5000 budgeted
            </Text>
            <TouchableOpacity className="bg-[#EDAF39] py-3 rounded-3xl mt-3"
             onPress={() => setModalVisibleForCreatingBudget(true)}
            >
              <Text className="text-[11px] text-black font-normal text-center">
                + Create budget
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text className="text-[28px] font-semibold text-white text-center mt-3">
            0
          </Text>
          <Text className="text-[14px] font-normal text-white text-center mt-3">
            You have no budget
          </Text>
        </View>
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

export default Availablebudget;
