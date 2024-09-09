import { View, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useOnboardingContext from "@src/utils/Context";
import AuthInputs from "@src/utils/AuthInputValues";
import images from "@src/constants/images";
import { renderIcon } from "../common/renderIcon";




export const EmailInput = () => {
 
  return (
    <View className="mb-3 relative">
      <TextInput
        placeholder="Enter Your Email"
        placeholderTextColor={"#C2C3CB"}
        inputMode="email"
        enterKeyHint="enter"
        autoComplete="email"
        cursorColor={'white'}
        selectionColor={'white'}
        className="mx-[5vw] h-[7vh] rounded-2xl bg-[#23262770] py-[1.7vh]
        text-[14px] font-normal pl-[15vw] text-white 
      "
      />
      <View className="absolute top-[2vh] left-[10vw]">
          {renderIcon('mail', 'AntDesign', 24, '#ffff' )}
      </View>
    </View>
  );
};
export const NameInput = () => {
 
  return (
    <View className="mb-3 relative">
      <TextInput
        placeholder="Enter Your Email"
        placeholderTextColor={"#C2C3CB"}
        inputMode="text"
        enterKeyHint="enter"
        autoComplete="given-name"
        cursorColor={'white'}
        selectionColor={'white'}
        className="mx-[5vw] h-[7vh] rounded-2xl bg-[#23262770] py-[1.7vh]
        text-[14px] font-normal pl-[15vw] text-white 
      "
      />
      <View className="absolute top-[2vh] left-[10vw]">
          {renderIcon('user', 'AntDesign', 24, '#ffff' )}
      </View>
    </View>
  );
};


export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const changeVisibilty = () => {
    setShowPassword((prev) => !showPassword);
  };
 

  return (
    <View className=" relative">
      <TextInput
        placeholder="Password"
        placeholderTextColor={"#C2C3CB"}
        secureTextEntry={showPassword}
        autoComplete="password"
        inlineImageLeft="eyeOpen"
        className="mx-[5vw] h-[7vh] rounded-2xl bg-[#23262770] py-[1.7vh]
        text-[14px] font-normal pl-[15vw] text-white
      "
      // onChangeText={(value)=>setPasswordValue(value)}
      />
      <View className="absolute top-[2vh] left-[10vw]">
          {renderIcon('lock', 'AntDesign', 24, '#ffff' )}
      </View>
      {showPassword ? (
        <TouchableOpacity className="absolute top-[1.5vh] right-[10vw]"
        onPress={changeVisibilty}
        >
          <Image
            source={images.onboarding.eyeOpen}
            className=" w-[3vh] h-[3vh]"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity className="absolute top-[1.5vh] right-[10vw]"
        onPress={changeVisibilty}
        >
        <Image
          source={images.onboarding.eyeClosed}
          className=" w-[3vh] h-[3vh]"
        />
        </TouchableOpacity>
      )}
    </View>
  );
};


export const PhoneNumberInput = () => {
 
  return (
    <View className="mb-3 relative">
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor={"#C2C3CB"}
        inputMode="text"
        enterKeyHint="send"
        autoComplete="tel"
        cursorColor={'white'}
        selectionColor={'white'}
        className="mx-[5vw] h-[7vh] rounded-2xl bg-[#23262770] py-[1.7vh]
        text-[14px] font-normal pl-[15vw] text-white 
      "
      />
      <View className="absolute top-[2vh] left-[10vw] rotate-[90deg]">
          {renderIcon('phone', 'AntDesign', 24, '#ffff' )}
      </View>
    </View>
  );
};