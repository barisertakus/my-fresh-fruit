import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import CustomInput from "../../utils/CustomInput";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <CustomInput leftIcon={<Icon name="search" size={24} color="#C2BDBD" />} placheHolder="Search for fruits" />
      </View>
      <View style={styles.icon}>
        <FontAwesome name="sliders-h" size={24} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  icon: {
    bottom: 13,
    marginLeft: 10,
  },
});
