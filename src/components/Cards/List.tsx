import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { renderIcon } from "../common/renderIcon";
import { listData } from "@src/constants/data";
import ThemedText from "@src/components/Cards/ThemedText";
import useNavigate from "@src/constants/navigate";


export type ListpropType = {
  setShowFreezeModal: (x: boolean) => void;
  setShowMoreModal: (x: boolean) => void;
};

const List = ({ setShowFreezeModal,setShowMoreModal }: ListpropType) => {

    const navigate = useNavigate();

  const action = (name: string) => {
    switch (name) {
      case "Freeze":
        setShowFreezeModal(true);
        break;
      case "More":
        setShowMoreModal(true);
        break;
      case "Details":
        navigate('CardDetails');
        break;
      case "Pay":
        navigate('FundWallets');
        break;

      default:
        break;
    }
  };
  return (
    <View className="flex-row justify-between items-center mx-[9vw] my-[3vh]">
      {listData.map((item, index) => {
        return (
          <View key={index} className="">
            {/* 1E1E26 */}
            <TouchableOpacity
              className=" bg-[#1e1e26] p-3 rounded-full w-[13vw]"
              onPress={() => action(item.name)}
            >
              {renderIcon(
                `${item.iconName}`,
                `${item.iconProvider}`,
                30,
                "#fff"
              )}
            </TouchableOpacity>
            <ThemedText
              name={item.name}
              size="small"
              color="#FFFFFF"
              weight="normal"
              styles={{ textAlign: "center", marginTop: 10 }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default List;
