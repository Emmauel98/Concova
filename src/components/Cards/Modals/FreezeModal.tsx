import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { renderIcon } from "@src/components/common/renderIcon";
import ThemedText from "@src/components/Cards/ThemedText";
import CustomButton from "../CustomButton";

const FreezeModal = ({
  setShowFreezeModal,
  showFreezeModal,
}: {
  setShowFreezeModal: (value: boolean) => void;
  showFreezeModal: boolean;
}) => {

    const cancelFreeze = ()=>{
        setShowFreezeModal(!showFreezeModal);
    }
  return (
    <View>
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={showFreezeModal}>
          <View className="h-screen w-screen bg-[#141414cc] pt-[50vh]">
            <ScrollView
              className="pb-[5vh]  pt-[3vh] h-[50vh]  bg-[#05070D] shadow-sm
             shadow-[#ffffff4b] rounded-[40px]"
            >
              <View className="flex-row justify-between items-center mx-[5vw]">
                <View className=" bg-[#27201A] p-3 rounded-full w-[13vw]">
                  {renderIcon(
                    "snowflake",
                    "MaterialCommunityIcons",
                    30,
                    "#EDAF39"
                  )}
                </View>
                <TouchableOpacity className=""
                onPress={()=>setShowFreezeModal(!showFreezeModal)}
                >
                  {renderIcon("close", "MaterialCommunityIcons", 23, "#fff")}
                </TouchableOpacity>
              </View>
              <View className=" mx-[5vw]">
                <ThemedText
                  name={"Freeze Virtual card"}
                  sizeNo={16}
                  color="#FFFFFF"
                  weight="bold"
                  styles={{ textAlign: "left", marginTop: 20 }}
                />
                <ThemedText
                  name={
                    "Are you sure you want to freeze this card? you'll not be able to make payment while this card is freozen?"
                  }
                  size="small"
                  color="#666666"
                  weight="light"
                  styles={{ textAlign: "left", marginTop: 10 }}
                />
              </View>

              <View className="mx-[5vw] mt-[5vh]">
                <CustomButton
                  name="Yes, Freeze card"
                  action="freeze_card"
                  backgroundColor="#EDAF39"
                />
                <CustomButton
                  name="No, Cancel"
                  action="cancel_freeze_card"
                  backgroundColor="#252525"
                  color="#fff"
                  func={cancelFreeze}
                />
              </View>
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default FreezeModal;
