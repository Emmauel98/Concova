import { View, Text, Modal, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { renderIcon } from '@src/components/common/renderIcon'
import EnterPinCode from '../TransferAmount/EnterPinCode'
import images from '@src/constants/images'


const EnterPasscode = ({
    modalVisbleForWithdrawPassCode,
    setModalVisibleForWithdrawPasscode
  }: {
    modalVisbleForWithdrawPassCode: boolean;
    setModalVisibleForWithdrawPasscode: (value: boolean) => void;
  }) => {
  return (
    <View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisbleForWithdrawPassCode}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          //   setModalVisibleForWithdrawPasscode(!modalVisible);
          // }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, height: "100%" }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className=" bg-[#1414148c] w-screen h-screen">
                <View
                  className="  h-[50vh] mt-[50vh]
                pb-[23vh] pt-[5vh] bg-[#05070D] shadow-sm shadow-white rounded-t-3xl
                "
                  // style={{ top: isFocused ? "40%" : "50%" }}
                >
                  <View className=" flex-row justify-center items-center">
                    <Text className=" text-[16px] font-normal text-white">
                      Input PIN to Pay
                    </Text>
                    <TouchableOpacity
                      className="absolute right-[5vw] top-[0vh]"
                      onPress={() => setModalVisibleForWithdrawPasscode(false)}
                    >
                      {renderIcon(
                        "close",
                        "MaterialCommunityIcons",
                        27,
                        "#fff"
                      )}
                    </TouchableOpacity>
                  </View>
                  {/* ................... */}
                  <View className=" flex-row justify-center items-center mt-5">
                    <Text className=" text-[40px] font-medium text-white">
                      Q 550
                    </Text>
                  </View>
                  {/* ................... */}
                  <EnterPinCode setModalVisible={setModalVisibleForWithdrawPasscode} />
                  <View className=" flex-row justify-center items-center gap-3">
                    <Image
                      source={images.transfer.fingerprint}
                      className=" w-[9vw] h-[4vh]"
                    />
                    <Text className=" text-[12px] font-normal text-white">
                      Use Biometric
                    </Text>
                  </View>
                  <View className=" flex-row justify-center items-center mt-10">
                    <Text className=" text-[12px] font-normal text-[#EDAF39]">
                      Forgot Pin
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </Modal>
    </View>
  )
}

export default EnterPasscode;