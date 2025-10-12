import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { renderIcon } from "@src/components/common/renderIcon";
import ThemedText from "@src/components/Cards/ThemedText";
import { MoreData } from "@src/constants/data";
import useNavigate from "@src/constants/navigate";


const MoreModal = ({
  setShowMoreModal,
  showMoreModal,
  setShowDeleteCardModal
}: {
  setShowMoreModal: (value: boolean) => void;
  setShowDeleteCardModal: (value: boolean) => void;
  showMoreModal: boolean;
}) => {


  const navigate = useNavigate();

  const action = (name: string) => {
    switch (name) {
      case "Delete your card":
        setShowMoreModal(false);
        setShowDeleteCardModal(true)
        break;
      case "Withdraw Funds":
        setShowMoreModal(false);
        navigate('WithdrawFund');
        break;
      case "Card Statement":
        setShowMoreModal(false);
        navigate('CardTransactions');
        break;

      default:
        break;
    }
  };

  return (
    <View>
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={showMoreModal}>
          <View className="h-screen w-screen bg-[#141414cc] pt-[50vh]">
            <ScrollView
              className="pb-[5vh]  pt-[3vh] h-[50vh]  bg-[#05070D] shadow-sm
             shadow-[#ffffff4b] rounded-[40px]"
            >
              <View className="flex-row justify-between items-center mx-[5vw] mb-[2vh]">
                <ThemedText
                  name={"More"}
                  sizeNo={16}
                  color="#FFFFFF"
                  weight="normal"
                  styles={{ textAlign: "left", marginTop: 20 }}
                />
                <TouchableOpacity
                  className=""
                  onPress={() => setShowMoreModal(!showMoreModal)}
                >
                  {renderIcon("close", "MaterialCommunityIcons", 23, "#fff")}
                </TouchableOpacity>
              </View>
              <View className="">
                {MoreData.map((item, index) => {
                  return (
                    <TouchableOpacity
                      className="flex-row  items-center mx-[5vw] my-[2vh]"
                      key={index}
                      onPress={()=> action(item.name)}
                    >
                      <View className="  p-3 rounded-full w-[13vw]"
                      style={{ backgroundColor: item.backgroundColor}}
                      >
                        {renderIcon(
                          `${item.iconName}`,
                          `${item.iconProvider}`,
                          30,
                          `${item.color}`
                        )}
                      </View>
                      <View className=" mx-[2vw]">
                        <ThemedText
                          name={item.name}
                          sizeNo={16}
                          color="#FFFFFF"
                          weight="normal"
                          styles={{ textAlign: "left", marginTop: 5 }}
                        />
                        <ThemedText
                          name={
                            item.desc
                          }
                          size="small"
                          color="#666666"
                          weight="light"
                          sizeNo={12}
                          styles={{ textAlign: "left", marginTop: 5 }}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default MoreModal;
