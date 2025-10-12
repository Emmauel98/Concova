import { View, TextInput, KeyboardAvoidingView,Platform, Alert } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useOnboarding } from "@src/context/onboarding";
import { useNavigation } from "@react-navigation/native";
import { StackNavprops } from "@src/navigation/DashboardStack";
import { StackNavigationProp } from "@react-navigation/stack";

const EnterPinCode = ({setModalVisible}:{setModalVisible: (value: boolean)=> void}) => {
  const context = useOnboarding()!;
  const { setColor } = context;
  const Navigation = useNavigation<StackNavigationProp<StackNavprops>>();


  const array = [1, 2, 3, 4];
  const [inputValues, setInputValues] = useState<number[]>([]);
  const inputRefs = useRef<TextInput[]>([]);

  const changeFocus = (value: any, id: number) => {
    const newValue: number = Number(value);
    const newId = id - 1;
    const newValues = inputValues.length > 0 ? [...inputValues] : [];
    newValues[newId] = newValue;
    setInputValues(newValues);

    if (id < array.length && value) {
      inputRefs.current[id].focus();
    }
    if (id === 4) {
      setColor("#F6411B");
      setModalVisible(false);
      Navigation.navigate('successful_payment');
    }
  };

  const handleKeyPress = (event: any, id: number) => {
    if (event.nativeEvent.key === "Backspace") {
      const newInputValue = event.nativeEvent.text;
      console.log(newInputValue, "text");

      if (id > 1) {
        const newValues = inputValues!;
        newValues.pop();
        setInputValues(newValues);
        if (newInputValue) {
          inputRefs.current[id - 1].focus();
        } else {
          inputRefs.current[id - 2].focus();
        }
      }
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <View className=" mx-5 my-8">
        <View className=" flex-row justify-center items-center gap-5">
          {array.map((id, index) => {
            return (
              <TextInput
                placeholder="_"
                placeholderTextColor={"white"}
                maxLength={1}
                inputMode="numeric"
                enterKeyHint="done"
                key={id}
                onChangeText={(value) => changeFocus(value, id)}
                onKeyPress={(event) => handleKeyPress(event, id)}
                ref={(el) => (inputRefs.current[index] = el!)}
                className=" w-[15vw] bg-[#16161C] border-2 border-[#ffffff31]
                h-[7vh] text-center rounded-lg text-white
                 "
              />
            );
          })}
        </View>
      </View>
      </KeyboardAvoidingView>
  );
};




export default EnterPinCode;
