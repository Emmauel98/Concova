import HeaderTitle from "@src/components/AssetsComponent/Transfer/HeaderTitle";
import List from "@src/components/Cards/List";
import LoanTrigger from "@src/components/Cards/LoanTrigger";
import DeleteCard from "@src/components/Cards/Modals/DeleteCard";
import FreezeModal from "@src/components/Cards/Modals/FreezeModal";
import MoreModal from "@src/components/Cards/Modals/MoreModal";
import ThemedText from "@src/components/Cards/ThemedText";
import VirtualCard from "@src/components/Cards/VirtualCard";
import Header from "@src/components/common/Header";
import AllTransaction from "@src/components/home/AllTransaction";
import { SafeAreaView } from "@src/components/layout/safeAreaView";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";

const Cards = () => {
  const [showFreezeModal, setShowFreezeModal] = useState<boolean>(false);
  const [showMoreModal, setShowMoreModal] = useState<boolean>(false);
  const [showDeleteCardModal, setShowDeleteCardModal] =
    useState<boolean>(false);

  return (
    <SafeAreaView className=" flex-1 h-screen bg-[#000000]">
      <ScrollView className="">
        <View className=" bg-[#000000] pb-[2vh]">
          <Header />
          <View className="mx-[5vw] my-[2vh]">
            <ThemedText
              name={"Cards"}
              size="medium"
              color="#FFFFFF"
              weight={"medium"}
            />
          </View>
          <VirtualCard />
          <List
            setShowFreezeModal={setShowFreezeModal}
            setShowMoreModal={setShowMoreModal}
          />
          <LoanTrigger />
          <AllTransaction />
          <FreezeModal
            showFreezeModal={showFreezeModal}
            setShowFreezeModal={setShowFreezeModal}
          />
          <MoreModal
            showMoreModal={showMoreModal}
            setShowMoreModal={setShowMoreModal}
            setShowDeleteCardModal={setShowDeleteCardModal}
          />
          <DeleteCard
            showDeleteCardModal={showDeleteCardModal}
            setShowDeleteCardModal={setShowDeleteCardModal}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;
