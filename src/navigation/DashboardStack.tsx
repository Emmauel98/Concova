import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { renderIcon } from "@src/components/common/renderIcon";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import images from "@src/constants/images";
import Home from "@src/screens/Home/Index";



const Tab = createBottomTabNavigator();

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
const  CustomTabBar: React.FC<BottomTabBarProps>  = ({ state, descriptors, navigation })=> {

    const iconNames = ['home', 'dollar-sign', '' , 'credit-card', 'grid' ]
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
          const color = isFocused ? '#FAC153' : '#fff';
          const iconProvider = route.name === 'Transactions' ? 'Entypo' : 'Feather';
          const iconName = iconNames[index ];

          console.log(iconName, iconProvider)

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
}

const DashboardStack = () => {
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
        component={FinanceScreen}
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

export default DashboardStack;

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "#000",
    paddingBottom: 10,
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3e3e3e",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F6411B",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -25, // Move the button upwards
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
  },
  centerIcon: {
    width: 40,
    height: 40,
  },
});
