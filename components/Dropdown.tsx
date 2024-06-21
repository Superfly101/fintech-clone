import { Pressable, StyleSheet, Text, View } from "react-native";
import RoundButton from "./RoundButton";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Divider from "./ui/Divider";
import { useState } from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View>
      <Menu>
        <MenuTrigger
          children={
            <View style={styles.trigger}>
              <View style={styles.circle}>
                <Ionicons name="ellipsis-horizontal" size={30} />
              </View>

              <Text style={styles.label}>More</Text>
            </View>
          }
        />
        <MenuOptions>
          <MenuOption
            children={
              <View style={styles.item}>
                <Text style={styles.text}>Statement</Text>

                <View>
                  <Ionicons name="card-sharp" size={25} color={Colors.dark} />
                </View>
              </View>
            }
          />
          <Divider />
          <MenuOption
            children={
              <View style={styles.item}>
                <Text style={styles.text}>Converter</Text>

                <View>
                  <MaterialIcons
                    name="currency-exchange"
                    size={25}
                    color={Colors.dark}
                  />
                </View>
              </View>
            }
          />
          <Divider />
          <MenuOption
            children={
              <View style={styles.item}>
                <Text style={styles.text}>Background</Text>

                <View>
                  <MaterialIcons name="photo" size={25} color={Colors.dark} />
                </View>
              </View>
            }
          />
          <Divider />
          <MenuOption
            children={
              <View style={styles.item}>
                <Text style={styles.text}>Add new account</Text>

                <View>
                  <Ionicons name="folder-open" size={25} color={Colors.dark} />
                </View>
              </View>
            }
          />
          <Divider />
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  trigger: {
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.dark,
  },
});

export default Dropdown;
