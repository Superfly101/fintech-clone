import Colors from "@/constants/Colors";
import { View, StyleSheet } from "react-native";

const Divider = () => {
  return (
    <View
      style={{
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.gray,
      }}
    />
  );
};

export default Divider;
