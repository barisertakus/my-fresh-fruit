import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";

const CustomInput = ({ placheHolder, value }) => {
  return (
    <Input
      placeholder={placheHolder}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      style={styles.input}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0,
  },
  container: {
    paddingLeft: 0,
  },
  input: {
    backgroundColor: "#F3F1F1",
    padding: 20,
    borderRadius: 15,
  },
});
