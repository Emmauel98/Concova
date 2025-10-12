import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { renderIcon } from "../common/renderIcon";

export type CreateBudgetListCompPropType = {
  showBankList: boolean;
  setShowBankList: (value: boolean) => void;
  setModalVisibleForCreatingBudget?: (value: boolean) => void;
  setModalVisibleForBudgetCycle?: (value: boolean) => void;
};
const CreateBudgetListComp = ({
  showBankList,
  setShowBankList,
  setModalVisibleForCreatingBudget,
  setModalVisibleForBudgetCycle
}: CreateBudgetListCompPropType) => {
  const data = [
    {
      title: "Name of Budget",
      info: "Type in budget",
    },
    {
      title: "Cycle of Budget",
      info: "Pick a Start date",
    },
    {
      title: "Select an account",
      info: "select an account",
    },
  ];

  const ButtonPressHandler = (title:string)=>{
    if (title === "Select an account") {
      setShowBankList(!showBankList);
    } else {
      if (setModalVisibleForCreatingBudget && setModalVisibleForBudgetCycle) {
        setModalVisibleForCreatingBudget(false);
        setModalVisibleForBudgetCycle(true);
      }
    }
  }
  return (
    <View className="mx-[3vw]">
      {data.map((item, index) => {
        const iconName =
          item.info === "Pick a Start date"
            ? "calendar-today"
            : showBankList
            ? "chevron-up"
            : "chevron-down";
        const iconColor =
          item.info === "Pick a Start date" ? "#EDAF39" : "#fff";

        return (
          <View
            key={index}
            className="bg-[#111116] my-[1vh] h-[10vh] p-5
          rounded-xl"
          >
            <Text className="font-normal text-[16px] text-white">
              {item.title}
            </Text>
            {item.title === "Name of Budget" ? (
              <TextInput
                placeholder={item.info}
                className="text-[#666666] text-[12px] font-light leading-5 mt-1"
              />
            ) : (
              <View>
                <Text className="text-[#666666] text-[12px] font-light leading-5 mt-1">
                  {item.info}
                </Text>
                <TouchableOpacity
                  className={`absolute right-[5vw] top-[-1vh] ${
                    iconName === "calendar-today"
                      ? "bg-[#1A1B1F] p-2 rounded-lg"
                      : null
                  }`}
                  onPress={() => ButtonPressHandler(item.title)}
                >
                  {renderIcon(
                    `${iconName}`,
                    "MaterialCommunityIcons",
                    30,
                    `${iconColor}`
                  )}
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default CreateBudgetListComp;
