import React, { useState, useRef } from "react";
import {
  Modal,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import Header from "@src/components/common/Header";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMainAppContextFunc } from "@src/utils/Context";
import { renderIcon } from "@src/components/common/renderIcon";
import HeaderTitle from "../HeaderTitle";
import CustomModal from "@src/components/Modal/CustomModal";
import { Modalize } from "react-native-modalize";
import images from "@src/constants/images";
import BankAccoucts from "./BankAccoucts";
import PaymentModalContent from "./PaymentModalContent";
import EnterPinCode from "./EnterPinCode";

const TransferAmount = () => {
  const { TransferTo, selectBankLogo, selectBankName } =
    useMainAppContextFunc();
  const [amount, setAmount] = useState<string>();
  const [note, setNote] = useState<string>();
  const billRef = useRef<Modalize>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showOtherAccounts, setShowOtherAccounts] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <View>
        <View className=" bg-[#000000]">
          <Header />
          <HeaderTitle name={TransferTo} />
        </View>
        <View className="flex-row  items-center my-4 mx-[5vw]">
          <View className="flex-row  items-center">
            {selectBankLogo && (
              <Image source={selectBankLogo} className="h-[7vh] w-[15vw]" />
            )}
          </View>
          <View className="mt-[1vh] ml-[4vw]">
            <Text className="text-[#FFFFFF] font-medium text-[24px] text-center">
              {selectBankName}
            </Text>
          </View>
        </View>
        {/* .... */}

        <View
          className=" bg-[#111116] w-[94vw] mx-[3vw] mt-[4vh]  
        rounded-xl  pl-[3vw]"
        >
          <Text className="font-normal text-white text-[16px] px-[5vw] py-4">
            Amount
          </Text>
          <View className=" flex-row">
            <Text className="font-normal text-white text-[16px] pl-[5vw] py-4">
              Q
            </Text>
            <TextInput
              placeholder="Enter 10-5,000,000.00"
              inputMode="numeric"
              keyboardType="numeric"
              placeholderTextColor={"#FFFFFF44"}
              className=" w-full mr-[2vw] py-[2vh] pl-2 text-white"
              onSubmitEditing={() => console.log(amount)}
              enterKeyHint="done"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
            <TouchableOpacity
              className="absolute right-[5vw] top-[2vh]"
              onPress={() => setAmount("")}
            >
              {renderIcon("close", "MaterialCommunityIcons", 25, "#fff")}
            </TouchableOpacity>
          </View>
          {/* ..... */}
          <View className=" h-[1px] bg-gray-600 w-[88%] opacity-50 mx-[5vw] mb-5"></View>
          {/* ..... */}
          <View className=" mx-[5vw]">
            <View className="flex-row text-[12px] mb-5">
              <Text className="text-[#7B7B7B]">Balance: </Text>
              <Text className="text-[#FFFFFF]">Q 1500</Text>
            </View>
            <TextInput
              placeholder="Enter note (optional)"
              inputMode="text"
              keyboardType="default"
              placeholderTextColor={"#FFFFFF44"}
              className=" w-full mr-[2vw] py-[1vh] pl-2 text-white bg-[#191922] rounded-lg mb-[2vh] "
              onSubmitEditing={() => console.log(note)}
              enterKeyHint="next"
              value={note}
              onChangeText={(text) => setNote(text)}
            />
          </View>
          {/* ..... */}

          {/* ..... */}
        </View>
        <CustomModal
          triggerDisabled={false}
          // modalTitle="Pay Bills"
          modalizeRef={billRef}
          headerComponent={"none"}
          triggerItem={
            <View
              className="py-[1.4vh] rounded-lg flex-row justify-center
            items-center"
              style={{
                backgroundColor: !amount ? "#573e10" : "#EDAF39",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 20,
                borderRadius: 5,
                marginVertical: 25,
              }}
            >
              <Text className=" text-[16px] font-normal">Next</Text>
            </View>
          }
          modalContent={
            showOtherAccounts ? (
              <BankAccoucts
                billRef={billRef}
                showOtherAccounts={showOtherAccounts}
                setShowOtherAccounts={setShowOtherAccounts}
              />
            ) : (
              <PaymentModalContent
                billRef={billRef}
                showOtherAccounts={showOtherAccounts}
                setShowOtherAccounts={setShowOtherAccounts}
                setModalVisible={setModalVisible}
              />
            )
          }
        />
        {/* ............ */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          //   setModalVisible(!modalVisible);
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
                      onPress={() => setModalVisible(false)}
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
                  <EnterPinCode setModalVisible={setModalVisible} />
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
    </SafeAreaView>
  );
};

export default TransferAmount;
