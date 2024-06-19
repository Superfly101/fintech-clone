import { Pressable, StyleSheet, Text, View } from "react-native";
import RoundButton from "./RoundButton";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Divider from "./ui/Divider";
import { useState } from "react";

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View>
      <RoundButton
        icon={"ellipsis-horizontal"}
        text="More"
        onPress={toggleDropdown}
      />

      <View style={[styles.content, isVisible && { display: "flex" }]}>
        <Pressable style={styles.item}>
          <Text style={styles.text}>Statement</Text>

          <View>
            <Ionicons name="card-sharp" size={25} color={Colors.dark} />
          </View>
        </Pressable>
        <Divider />
        <Pressable style={styles.item}>
          <Text style={styles.text}>Converter</Text>

          <View>
            <MaterialIcons
              name="currency-exchange"
              size={25}
              color={Colors.dark}
            />
          </View>
        </Pressable>
        <Divider />
        <Pressable style={styles.item}>
          <Text style={styles.text}>Background</Text>

          <View>
            <MaterialIcons name="photo" size={25} color={Colors.dark} />
          </View>
        </Pressable>
        <Divider />
        <Pressable style={styles.item}>
          <Text style={styles.text}>Add new account</Text>

          <View>
            <Ionicons name="folder-open" size={25} color={Colors.dark} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trigger: {},
  content: {
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    borderRadius: 8,
    position: "absolute",
    top: 90,
    right: -4,
    width: 230,
    display: "none",
  },
  item: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Dropdown;
