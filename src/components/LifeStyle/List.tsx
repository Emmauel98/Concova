import { View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { lifeStyleData, lifeStylePropType } from "@src/constants/data";
import ThemedText from "@src/components/Cards/ThemedText";
import { renderIcon } from "@src/components/common/renderIcon";


const ListItem = ({ item }:{item: lifeStylePropType}) => (
    <View  className="mx-[4.6vw] my-3 w-[15vw] ">
    {/* 1E1E26 */}
    <TouchableOpacity
      className=" bg-[#1e1e26] p-3 rounded-full w-[13vw]
       flex-row justify-center items-center
      "
    //   onPress={() => action(item.name)}
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
  return (
    <View >
      <FlatList
      data={lifeStyleData}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={(item) => item.name}
      numColumns={4} // Number of items per row
      contentContainerStyle={{ padding: 10 }}
      className=""
    />
    </View>
  );
};

export default List;
