import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterHeader from "../components/Authentication/RegisterHeader";

const Authentication = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={styles.container}>
      <RegisterHeader />
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
