import { View, Image, Pressable } from "react-native";
import React from "react";
import ThemedText from "@src/components/Cards/ThemedText";
import images from "@src/constants/images";
import CustomButton from "./CustomButton";
import useNavigate from "@src/constants/navigate";


const CurrentOutStanding = () => {
  return (
    <View className=" bg-[#111116] mx-[5vw] mt-[5vh] rounded-3xl pb-[5vw]">
      <View className="mx-[5vw] py-[3vh]">
        <ThemedText
          name={"Current Outstanding"}
          sizeNo={14}
          color="#fff"
          weight="semibold"
          styles={{ textAlign: "left" }}
        />
      </View>
      <EachComp />
      <EachComp />
    </View>
  );
};

export default CurrentOutStanding;


const EachComp = ()=>{

    const navigate = useNavigate();

    const action = ()=>{
        navigate('Repayment')
    }

    return(
        <View className="mx-[3vw] py-[2vh] bg-[#17171F] rounded-2xl mt-[2vh]">
        <View className="mx-[2vw] py-[2vh] bg-[#111116] rounded-2xl flex-row">
          <View className=" px-[5vw]">
            <Image
              source={images.transfer.concavo}
              className="w-[13vw] h-[6vh] "
            />
          </View>
          <ThemedText
            name={"Balance ($29,340.20)"}
            sizeNo={12}
            color="#fff"
            weight="normal"
            styles={{ textAlign: "center", marginTop: 20 }}
          />
        </View>
        <View className="mx-[5vw] mt-[2vh]">
          <View className="mx-[5vw] flex-row justify-between mb-[1vh] items-center">
            <ThemedText
              name={"Outstanding"}
              sizeNo={12}
              color="#FFFFFF"
              weight="medium"
            />
            <ThemedText
              name={"Due Date"}
              sizeNo={12}
              color="#FFFFFF"
              weight="medium"
              styles={{
                marginRight: 26,
              }}
            />
          </View>
          <View className="mx-[5vw] flex-row justify-between items-center ">
            <ThemedText
              name={"Q 40,000"}
              sizeNo={23}
              color="#FFFFFF"
              weight="semibold"
            />
            <View className="mx-[5vw] flex-row justify-between mb-[1vh] items-center ml-[10vw]">
              <ThemedText
                name={"2 years"}
                sizeNo={23}
                color="#FFFFFF"
                weight="semibold"
              />
            </View>
          </View>
          <View
           className="  mt-[2vh] flex-row justify-center items-center">
            <CustomButton name="Repay" height={40} width={320} func={action} />
          </View>
        </View>
      </View>
    )
}