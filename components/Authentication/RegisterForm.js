import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomInput from "../../utils/CustomInput";

const RegisterForm = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.headerText}>What is your email ?</Text>
          <CustomInput placheHolder="Your mail" />
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Password")}>
          <Text style={styles.buttonText}>Continue for password!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 0.42,
  },
  content: {
    paddingHorizontal: "7%",
    paddingTop: "10%",
    paddingBottom: "10%",
    justifyContent: "space-between",
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  regularText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FFA451",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
