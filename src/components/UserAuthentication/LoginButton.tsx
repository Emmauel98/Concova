import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticationStackParamList } from "@src/utils/Types";
import Toast from "react-native-toast-message";
import useOnboardingContext from "@src/utils/Context";



const LoginButton = ({name}:{name: string}) => {
  const navigation =
    useNavigation<StackNavigationProp<AuthenticationStackParamList>>();

  const [loading, setLoading] = useState(false);

  const {verify, setVerify} = useOnboardingContext();


  const clickBtn = async () => {
    try {
      setLoading(true);
      setTimeout(()=>{
        switch (name) {
          case 'Register':
            navigation.navigate('getVerificationCode');
            break;
          case 'Continue':
            setVerify(true);
            break;
        
          default:
            break;
        };
        setLoading(false);
      },1000)
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Incorrect email or password",
      });
    }
  };


  return (
    <View className=" mx-5 bg-[#EDAF39] h-[7vh] rounded-3xl mt-[2vh]">
      <TouchableOpacity onPress={clickBtn} disabled={loading}>
        <View className="bg-[#EDAF39] h-full flex-row justify-center items-center rounded-3xl">
          <Text className=" font-normal text-center text-black text-[20px]">{name}</Text>
          {loading && (
            <ActivityIndicator
              size="small"
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
