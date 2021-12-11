import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterHeader from "../components/Authentication/RegisterHeader";
import RegisterPassword from "../components/Authentication/RegisterPassword";

const Password = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={styles.container}>
      <RegisterHeader />
      <RegisterPassword />
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
