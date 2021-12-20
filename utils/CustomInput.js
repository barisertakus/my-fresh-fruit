import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";

const CustomInput = ({ placheHolder, value, ...props }) => {
  return (
    <Input
      placeholder={placheHolder}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      placeholderTextColor="#C2BDBD"
      inputStyle={styles.input}
      {...props}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: "#F3F4F9",
    padding: 7,
    paddingLeft: 20,
    borderRadius: 15,
  },
  container: {
    paddingLeft: 0,
  },
  input:{
    fontSize: 14
  }
});
