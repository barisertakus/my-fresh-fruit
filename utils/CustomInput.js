import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";

const CustomInput = ({ placheHolder, value, ...props }) => {
  return (
    <Input
      placeholder={placheHolder}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      style={styles.input}
      {...props}
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
