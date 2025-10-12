import { View, Text, TextStyle } from "react-native";
import React from "react";

const ThemedText = ({
  name,
  size,
  color,
  styles,
  weight,
  sizeNo
}: {
  name: string;
  size?: "small" | "medium" | "large";
  color?: string;
  styles?: TextStyle;
  weight: "medium" | "semibold" | "bold" | "normal" | "light";
  sizeNo?: number;
}) => {
  const fontSize = size === "small" ? 12 : size === "medium" ? 24.14 : sizeNo;
  const fontWeight =
    weight === "semibold"
      ? "600"
      : weight === "medium"
      ? "500"
      : weight === "normal"
      ? "400"
      : weight === "light"
      ? "300"
      : "700";
  const myColor = color ? color : "white";

  return (
    <View>
      <Text style={[{ color: myColor, fontSize, fontWeight }, styles]}>
        {name}
      </Text>
    </View>
  );
};

export default ThemedText;
