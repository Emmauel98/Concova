import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavprops } from "@src/navigation/DashboardStack";

type RouteNames = keyof StackNavprops;

const useNavigate = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavprops>>();
  
  const navigate = (routeName: RouteNames) => {
    navigation.navigate(routeName);
  };

  return navigate;
};

export default useNavigate;

//  Custom hook


