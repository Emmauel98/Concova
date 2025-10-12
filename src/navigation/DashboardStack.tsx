import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Platform,
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
import TransferAmount from "@src/components/AssetsComponent/Transfer/TransferAmount";
import SuccessFulPayment from "@src/screens/AssetsPage/SuccessFulPayment";
import Withdraw from "@src/components/AssetsComponent/Transfer/Withdraw/Withdraw";
import Budget from "@src/screens/Budget";
import BudgetAmount from "@src/components/Budget/BudgetAmount";
import BudgetPreview from "@src/components/Budget/BudgetPreview";
import SeeBudget from "@src/components/Budget/SeeBudget";
import Cards from "@src/screens/Cards.tsx";
import CardDetails from "@src/components/Cards/CardDetails";
import FundWallets from "@src/components/Cards/FundWallets";
import WithdrawFund from "@src/components/Cards/WithdrawFund";
import CardTransactions from "@src/components/Cards/CardTransactions";
import LifeStyle from "@src/screens/LifeStyle";
import OutstandingLoan from "@src/components/LifeStyle/OutstandingLoan";
import Loan from "@src/components/LifeStyle/Loan";
import Refer from "@src/components/LifeStyle/Refer";
import Invitation from "@src/components/LifeStyle/Invitation";
import Repayment from "@src/components/LifeStyle/Repayment";
import Debt from "@src/components/home/Debt";
import Expenses from "@src/components/home/Expenses";
import NetCash from "@src/components/home/NetCash";
import Income from "@src/components/home/Income";
import Userprofile from "@src/screens/UserProfile";





export type StackNavprops = {
  Main: any;
  transfer: any;
  select_bank: any;
  Transfer_Amount: any; 
  successful_payment: any;
  withdraw: any;
  Budget: any;
  BudgetAmount: any;
  BudgetPreview: any;
  SeeBudget: any;
  CardDetails: any;
  FundWallets: any;
  WithdrawFund: any;
  CardTransactions: any;
  OutstandingLoan: any;
  Loan: any;
  Refer: any;
  Invitation: any;
  Repayment: any;
  Expenses: any;
  Debt: any;
  NetCash: any;
  Income: any;
  Userprofile: any;
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<StackNavprops>();



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
              // testID={options.tabBarTestID}
              onPress={onPress}
              className="px-[1vw]"
            >
              {route.name === "Center" ? (
                <View
                  className=" w-[18.3vw] h-[8.5vh] justify-center items-center absolute 
                top-[-4.5vh]"
                >
                  <Image
                    source={images.home.fancylogo}
                    className={`relative top-[-4vh]  ${Platform.OS === 'android' ? "w-[16.5vw] h-full left-[1vw]" : "w-full h-full left-[-7.5vw]"}`}
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
        name="Cards"
        component={Cards}
        options={{ tabBarLabel: "credit-card" }}
      />
      <Tab.Screen
        name="More"
        component={LifeStyle}
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
          <Stack.Screen
            name="Transfer_Amount"
            component={TransferAmount}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="successful_payment"
            component={SuccessFulPayment}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="withdraw"
            component={Withdraw}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="Userprofile"
            component={Userprofile}
            options={{ headerShown: false, title: "" }}
          />
        </Stack.Group>
        {/* Budget Group stack */}
        <Stack.Group>
          <Stack.Screen
            name="Budget"
            component={Budget}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="BudgetAmount"
            component={BudgetAmount}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="BudgetPreview"
            component={BudgetPreview}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="SeeBudget"
            component={SeeBudget}
            options={{ headerShown: false, title: "" }}
          />
        </Stack.Group>
        {/* Card Group stack */}
        <Stack.Group>
          <Stack.Screen
            name="Refer"
            component={Refer}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="Loan"
            component={Loan}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="Repayment"
            component={Repayment}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="OutstandingLoan"
            component={OutstandingLoan}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="Invitation"
            component={Invitation}
            options={{ headerShown: false, title: "" }}
          />
        </Stack.Group>

        {/* Lifestyle Group stack */}
        <Stack.Group>
          <Stack.Screen
            name="CardDetails"
            component={CardDetails}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="FundWallets"
            component={FundWallets}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="WithdrawFund"
            component={WithdrawFund}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="CardTransactions"
            component={CardTransactions}
            options={{ headerShown: false, title: "" }}
          />
        </Stack.Group>
        {/* Trends Group stack */}
        <Stack.Group>
          <Stack.Screen
            name="Expenses"
            component={Expenses}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="Debt"
            component={Debt}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="NetCash"
            component={NetCash}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="Income"
            component={Income}
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
