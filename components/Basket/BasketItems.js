import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import { itemsSelector, totalPriceSelector } from "../../features/basketSlice";
import BasketRow from "./BasketRow";

const BasketItems = () => {
  const items = useSelector(itemsSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const handlePress = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {items.map((item, i) => {
              return (
                <View key={i}>
                  <BasketRow item={item} />
                  <Divider style={styles.divider} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.checkout}>
          <View style={styles.price}>
            <Text style={[styles.regularText, { paddingBottom: 8 }]}>
              Total
            </Text>
            <Text style={styles.priceText}>$ {totalPrice}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BasketItems;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: "white",
    paddingTop: 10,
  },
  safeArea: {
    flex: 1,
  },
  divider: {
    marginTop: 20,
  },
  checkout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    flex: 0.2,
    paddingBottom: 20,
  },
  price: {},
  button: {
    backgroundColor: "#FFA451",
    padding: 20,
    paddingHorizontal: 70,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  priceText: {
    color: "#27214D",
    fontWeight: "600",
    fontSize: 22,
  },
  regularText: {
    color: "#27214D",
    fontSize: 14,
  },
});
