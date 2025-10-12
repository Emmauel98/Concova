import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { renderIcon } from "../common/renderIcon";

export type ModalForBudgetCyclePropType = {
  modalVisibleForBudgetCycle: boolean;
  setModalVisibleForBudgetCycle: (value: boolean) => void;
  setModalVisibleForCreatingBudget: (value: boolean) => void;
};
const ModalForBudgetCycle = ({
  modalVisibleForBudgetCycle,
  setModalVisibleForBudgetCycle,
  setModalVisibleForCreatingBudget,
}: ModalForBudgetCyclePropType) => {
  const [pickDateForStartDate, setPickDateForStartDate] =
    useState<boolean>(false);
  const [pickDateForEndDate, setPickDateForEndDate] = useState<boolean>(false);
  const [selectedForStartDate, setSelectedForStartDate] =
    useState("Start date");
  const [selectedForEndDate, setSelectedForEndDate] = useState("End date");

  return (
    <View>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleForBudgetCycle}
        >
          <View className="h-screen w-screen bg-[#141414e1] pt-[22vh]">
            <ScrollView
              className="pb-[5vh]  pt-[3vh] h-[78vh]  bg-[#05070D] shadow-sm
             shadow-[#ffffff4b] rounded-[40px]"
            >
              <View className=" mb-[50vh] h-full">
                <View className=" flex-row ml-[5vw] items-center">
                  <TouchableOpacity
                    className="absolute left-[1vw] top-[-vh]"
                    onPress={() => {
                      setModalVisibleForBudgetCycle(false);
                      setModalVisibleForCreatingBudget(true);
                    }}
                  >
                    {renderIcon(
                      "chevron-down",
                      "MaterialCommunityIcons",
                      35,
                      "#fff"
                    )}
                  </TouchableOpacity>
                  <Text className=" text-[16px] font-bold text-white ml-[10vw]">
                    Edit budget Cycle
                  </Text>
                </View>
                <View
                  className="bg-[#111116] mb-[1vh] h-[10vh] p-5 mx-[5vw] mt-[3vh]
              rounded-xl"
                >
                  <Text className="font-normal text-[16px] text-white">
                    Frequency
                  </Text>
                  <View>
                    <Text className="text-[#666666] text-[12px] font-light leading-5 mt-1">
                      Monthly
                    </Text>
                    <TouchableOpacity
                      className={`absolute right-[5vw] top-[-1vh]`}
                      //   onPress={() => ButtonPressHandler(item.title)}
                    >
                      {renderIcon(
                        "chevron-down",
                        "MaterialCommunityIcons",
                        30,
                        "white"
                      )}
                    </TouchableOpacity>
                    {/* <BankAccountsList /> */}
                  </View>
                </View>
                {/* Pick start date */}

                <View
                  className="bg-[#111116] mb-[1vh] h-[10vh] p-5 mx-[5vw] mt-[3vh]
              rounded-xl"
                >
                  <View className=" flex-row justify-between items-center mx-[5vw]">
                    <Text className="font-normal text-[16px] text-white">
                      Pick a start date
                    </Text>
                    <TouchableOpacity
                      className="absolute right-[-3vw] top-[-1vh] bg-[#1A1B1F] p-2 rounded-lg"
                      onPress={() => {
                        setPickDateForStartDate(!pickDateForStartDate);
                      }}
                    >
                      {renderIcon(
                        "calendar-today",
                        "MaterialCommunityIcons",
                        35,
                        "#EDAF39"
                      )}
                    </TouchableOpacity>
                  </View>

                  <Text className="text-[#666666] text-[12px] font-light leading-5 mt-1 mx-[5vw]">
                    {selectedForStartDate}
                  </Text>

                  <View className=" relative bottom-[-18vh] left-[-5vw] z-50 bg-[#ffffff48]">
                    {pickDateForStartDate && (
                      <Calendar
                        onDayPress={(day: any) => {
                          setSelectedForStartDate(day.dateString);
                          setPickDateForStartDate(false);
                        }}
                        markedDates={{
                          [selectedForStartDate]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedDotColor: "orange",
                          },
                        }}
                        style={{
                          // borderWidth: 1,
                          // borderColor: 'gray',
                          height: 350,
                          backgroundColor: "#111116",
                          borderRadius: "20px",
                          width: 370,
                          paddingBottom: "320px",
                        }}
                        theme={{
                          backgroundColor: "#fff",
                          calendarBackground: "#111116",
                          textSectionTitleColor: "#b6c1cd",
                          selectedDayBackgroundColor: "#EDAF39",
                          selectedDayTextColor: "#ffffff",
                          todayTextColor: "#fff",
                          dayTextColor: "#fff",
                          textDisabledColor: "#7B7B7B",
                        }}
                      />
                    )}
                  </View>
                </View>
                {/* pickend date */}

                <View
                  className="bg-[#111116] h-[10vh] p-5 mx-[5vw] mt-[3vh]
              rounded-xl"
                >
                  <View className=" flex-row justify-between items-center mx-[5vw]">
                    <Text className="font-normal text-[16px] text-white">
                      Pick a end date
                    </Text>
                    <TouchableOpacity
                      className="absolute right-[-3vw] top-[-1vh] bg-[#1A1B1F] p-2 rounded-lg"
                      onPress={() => {
                        setPickDateForEndDate(!pickDateForEndDate);
                      }}
                    >
                      {renderIcon(
                        "calendar-today",
                        "MaterialCommunityIcons",
                        35,
                        "#EDAF39"
                      )}
                    </TouchableOpacity>
                  </View>
                  <Text className="text-[#666666] text-[12px] font-light leading-5 mt-1 mx-[5vw]">
                    {selectedForEndDate}
                  </Text>

                  <View className=" relative bottom-[-5vh] left-[-5vw] z-50 bg-[#ffffff48]">
                    {pickDateForEndDate && (
                      <Calendar
                        onDayPress={(day: any) => {
                          setSelectedForEndDate(day.dateString);
                          setPickDateForEndDate(!pickDateForEndDate);
                        }}
                        markedDates={{
                          [selectedForEndDate]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedDotColor: "orange",
                          },
                        }}
                        style={{
                          // borderWidth: 1,
                          // borderColor: 'gray',
                          height: 350,
                          backgroundColor: "#111116",
                          borderRadius: "20px",
                          width: 370,
                          paddingBottom: "320px",
                        }}
                        theme={{
                          backgroundColor: "#fff",
                          calendarBackground: "#111116",
                          textSectionTitleColor: "#b6c1cd",
                          selectedDayBackgroundColor: "#EDAF39",
                          selectedDayTextColor: "#ffffff",
                          todayTextColor: "#fff",
                          dayTextColor: "#fff",
                          textDisabledColor: "#7B7B7B",
                        }}
                      />
                    )}
                  </View>
                </View>
                {/* Button */}

                <TouchableOpacity
                  className="absolute bottom-0 left-[5vw]  flex-row justify-center items-center mt-[10vh]"
                  onPress={() => {
                    setModalVisibleForCreatingBudget(true);
                    setModalVisibleForBudgetCycle(false);
                  }}
                  style={{
                    bottom: `${
                      pickDateForStartDate || pickDateForEndDate ? "0%" : "40%"
                    }`,
                  }}
                >
                  <View
                    className=" bg-[#EDAF39]  w-[90vw] h-[5vh] flex-row justify-center 
                  items-center rounded-lg
                  "
                  >
                    <Text className="text-[16px] font-normal text-black text-center">
                      Set Cycle
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* ... */}
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default ModalForBudgetCycle;

// https://github.com/wix/react-native-calendars  : react-native-calendars documentation
