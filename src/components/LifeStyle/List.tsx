import { View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { lifeStyleData, lifeStylePropType } from "@src/constants/data";
import ThemedText from "@src/components/Cards/ThemedText";
import { renderIcon } from "@src/components/common/renderIcon";
import useNavigate from "@src/constants/navigate";


const ListItem = ({ item, action }:{item: lifeStylePropType; action: (x: string)=> void}) => (
    <View  className="mx-[4.6vw] my-3 w-[15vw] ">
    {/* 1E1E26 */}
    <TouchableOpacity
      className=" bg-[#1e1e26] p-3 rounded-full w-[13vw]
       flex-row justify-center items-center
      "
      onPress={() => action(item.name)}
    >
      {renderIcon(
        `${item.iconName}`,
        `${item.iconProvider}`,
        30,
        "#EDAF39"
      )}
    </TouchableOpacity>
    <ThemedText
      name={item.name}
      sizeNo={8}
      color="#FFFFFF"
      weight="normal"
      styles={{ textAlign: "center", marginTop: 10 }}
    />
  </View>
  );

const List = () => {

    const navigate = useNavigate();

    const action = (name: string) => {
        switch (name) {
          case "Refer & Earn":
            navigate('Refer');
            break;
          case "Loan":
            navigate('Loan');
            break;
          case "Invitation":
            navigate('Invitation');
            break;
          case "Pay":
            navigate('FundWallets');
            break;
    
          default:
            break;
        }
      };

  return (
    <View >
      <FlatList
      data={lifeStyleData}
      renderItem={({ item }) => <ListItem item={item} action={action} />}
      keyExtractor={(item) => item.name}
      numColumns={4} // Number of items per row
      contentContainerStyle={{ padding: 10 }}
      className=""
    />
    </View>
  );
};

export default List;
