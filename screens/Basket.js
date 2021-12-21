import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BasketHeader from "../components/Basket/BasketHeader";
import BasketItems from "../components/Basket/BasketItems";

const Basket = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BasketHeader navigation={navigation} />
      <BasketItems />
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
