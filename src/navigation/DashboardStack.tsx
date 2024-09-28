import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { renderIcon } from "@src/components/common/renderIcon";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import images from "@src/constants/images";
import Home from "@src/screens/Home/Index";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, Entypo, Octicons, FontAwesome } from "@expo/vector-icons";
import { Host } from "react-native-portalize";
import { appColors } from "../constants/colors";
import Transfer from "@src/components/AssetsComponent/Transfer";
import Assets from "@src/screens/AssetsPage";
import SelectBank from "@src/components/AssetsComponent/Transfer/SelectBank";




export type StackNavprops = {
  Main: any;
  transfer: any;
  select_bank: any;
}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<StackNavprops>();

const FinanceScreen = () => (
  <View>
    <Text>Finance</Text>
  </View>
);
const CardsScreen = () => (
  <View>
    <Text>Cards</Text>
  </View>
);
const MoreScreen = () => (
  <View>
    <Text>More</Text>
  </View>
);

// Custom Tab Bar Component
const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const iconNames = ["home", "dollar-sign", "", "credit-card", "grid"];
  return (
    <View className=" bg-[#000000] h-[13vh] flex-row justify-between  items-center">
      <ImageBackground
        source={images.home.background}
        className=" flex-row justify-around h-[10vh]
        py-[3vh] mx-[2.6vh] rounded-xl w-[90vw] mb-[2vh]"
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const color = isFocused ? "#FAC153" : "#fff";
          const iconProvider =
            route.name === "Transactions" ? "Entypo" : "Feather";
          const iconName = iconNames[index];

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              className="px-[10vw]"
            >
              {route.name === "Center" ? (
                <View
                  className=" w-[18.3vw] h-[8.5vh] justify-center items-center absolute 
                top-[-4.5vh]"
                >
                  <Image
                    source={images.home.fancylogo}
                    className=" w-full h-full relative top-[-4vh] left-[1vw]"
                  />
                </View>
              ) : (
                <View>{renderIcon(iconName, iconProvider, 28, color)}</View>
              )}
            </TouchableOpacity>
          );
        })}
      </ImageBackground>
    </View>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "home" }}
      />
      <Tab.Screen
        name="Assets"
        component={Assets}
        options={{ tabBarLabel: "usd" }}
      />
      <Tab.Screen
        name="Center"
        component={Home}
        options={{ tabBarLabel: "center" }}
      />
      <Tab.Screen
        name="Transactions"
        component={CardsScreen}
        options={{ tabBarLabel: "credit-card" }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{ tabBarLabel: "th-large" }}
      />
    </Tab.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Host>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigation}
          options={{ headerShown: false, title: "" }}
        />
        <Stack.Group>
          <Stack.Screen
            name="transfer"
            component={Transfer}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="select_bank"
            component={SelectBank}
            options={{ headerShown: false, title: "" }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </Host>
  );
};

const styles = StyleSheet.create({
  tabBarStyles: {
    height: 100,
    paddingBottom: 10,
    backgroundColor: appColors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 0,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: appColors.orange,
    borderRadius: 50,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardStack;
