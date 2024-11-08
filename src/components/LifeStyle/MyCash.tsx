import { View, Image } from "react-native";
import React from "react";
import ThemedText from "@src/components/Cards/ThemedText";
import CustomButton from "./CustomButton";
import images from "@src/constants/images";

const MyCash = () => {
  return (
    <View
      className="bg-[#111116]  mx-[5vw] mt-[2vh] py-[2vh] rounded-xl border
     border-[#ffffff17] relative h-[30vh]"
    >
      <View className=" flex-row justify-between mx-[5vw] items-center">
        <View className=" flex-row items-center">
          <ThemedText
            name={"My Cash:"}
            sizeNo={19}
            color="#fff"
            weight="medium"
            styles={{
              textAlign: "center",
            }}
          />
          <ThemedText
            name={"297"}
            sizeNo={26}
            color="#fff"
            weight="medium"
            styles={{
              textAlign: "center",
            }}
          />
        </View>
        <CustomButton name="Withdraw" height={40} width={110} />
      </View>

      <View className="bg-[#3F3F3F] h-[0.1px] rounded-3xl w-[80vw] mx-[5vw] mt-[2vh]"></View>

      <View className="">
        <View className="flex-row justify-center items-center my-[2vh]">
          <ThemedText
            name={"Invite "}
            sizeNo={13}
            color="#fff"
            weight="normal"
            styles={{
              textAlign: "center",
            }}
          />
          <ThemedText
            name={"3 "}
            sizeNo={13}
            color="#EDAF39"
            weight="normal"
            styles={{
              textAlign: "center",
            }}
          />
          <ThemedText
            name={"new users to reach "}
            sizeNo={13}
            color="#fff"
            weight="normal"
            styles={{
              textAlign: "center",
            }}
          />
          <ThemedText
            name={"10"}
            sizeNo={13}
            color="#EDAF39"
            weight="normal"
            styles={{
              textAlign: "center",
            }}
          />
        </View>
        <ThemedText
          name={"cavocoin and withdraw"}
          sizeNo={13}
          color="#fff"
          weight="normal"
          styles={{
            textAlign: "center",
          }}
        />
      </View>

      <View className=" bg-[#ffffff36] rounded-3xl h-[2vh] mx-[5vw] mt-[4vh]">
        <View
          className=" bg-[#EDAF39] rounded-3xl h-[2vh]"
          style={{ width: `${20}%` }}
        ></View>
        <User position={20} name="3 users" count="10" />
        <User position={55} name="5 users" count="25" />
        <User position={85} name="7 users" count="35" />
      </View>


    </View>
  );
};

export default MyCash;

const User = ({position, name, count}:{position: number; name: string; count: string;}) => {
  return (
    <View className=" absolute top-[-2vh]" style={{ left: `${position}%` }}>
      <View className=" w-[30vw] relative">
        <Image
          source={images.lifeStyle.conca}
          className=" w-[12.1vw] h-[5.3vh]"
        />
        <View className=" absolute left-[4vw] top-[1.5vh]">
          <ThemedText
            name={count}
            sizeNo={13}
            color="#000"
            weight="bold"
            styles={{
              textAlign: "center",
            }}
          />
        </View>
      </View>
      <View className=" absolute left-[0vw] top-[6vh]">
        <ThemedText
          name={name}
          sizeNo={13}
          color="#fff"
          weight="normal"
          styles={{
            textAlign: "center",
          }}
        />
      </View>
    </View>
  );
};
