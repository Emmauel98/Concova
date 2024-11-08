import { View, ImageBackground, Image } from "react-native";
import React from "react";
import images from "@src/constants/images";
import ThemedText from "@src/components/Cards/ThemedText";
import CustomButton from "./CustomButton";



const InstallmentLaon = () => {
  return (
    <ImageBackground
      source={images.lifeStyle.LoanBackground}
      resizeMode="contain"
      className=" mt-[8vh] h-[35vh border border-[#ffffff27]
     rounded-3xl  mx-[5vw]"
    >
      <View className=" absolute left-[6vw] top-[-1.2vh]">
        <Image
          source={images.lifeStyle.repayTerms}
          className="w-[80vw] h-[5vh] "
        />
        <View className="absolute left-[13vw] mt-[2vh]">
          <ThemedText
            name={"Repay in 5 terms, 1 month/term"}
            sizeNo={13}
            color="#000000"
            weight="normal"
            styles={{ textAlign: "center" }}
          />
        </View>
      </View>
      <View className="flex-row items-center mx-[4vh] mt-[5vh]">
        <View className=" bg-[#EDAF39] py-2 px-3 mr-[2vw] rounded-xl">
          <Image
            source={images.lifeStyle.installment}
            className="w-[3vw] h-[2vh] "
          />
        </View>
        <ThemedText
          name={"Installment Loan"}
          sizeNo={17}
          color="#FFFFFF"
          weight="medium"
        />
      </View>
      <View className="mx-[5vw] mt-[2vh]">
        <View className="mx-[5vw] flex-row justify-between mb-[1vh] items-center">
          <ThemedText
            name={"Loanable Amount"}
            sizeNo={12}
            color="#FFFFFF"
            weight="medium"
          />
          <ThemedText
            name={"Loan Period"}
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
              name={"60"}
              sizeNo={23}
              color="#FFFFFF"
              weight="semibold"
            />
            <ThemedText
              name={"Months"}
              sizeNo={11}
              color="#FFFFFF"
              weight="semibold"
              styles={{ marginTop: 4, marginLeft: 5 }}
            />
          </View>
        </View>
      </View>
      <View className="mx-[5vw] flex-row items-center ml-[10vw] mt-[1vh]">
        <ThemedText
          name={"0.6% "}
          sizeNo={13}
          color="#EDAF39"
          weight="normal"
        />
        <ThemedText
          name={"Daily Interest"}
          sizeNo={13}
          color="#FFFFFF"
          weight="normal"
          styles={{ marginTop: 4, marginLeft: 5 }}
        />
      </View>
      <View className="  mt-[2vh] flex-row justify-center items-center">
        <CustomButton name="Borrow Now" height={40} width={320} />
      </View>
      <View className="mx-[5vw] flex-row mb-[1vh] items-center ml-[10vw] mt-[1vh]">
        <ThemedText
          name={"Please Repay all outstanding before applying for another loan"}
          sizeNo={13}
          color="#FFFFFF"
          weight="normal"
          styles={{ marginTop: 4, marginLeft: 5 }}
        />
      </View>
    </ImageBackground>
  );
};

export default InstallmentLaon;
