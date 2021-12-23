import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, Divider } from "react-native-elements";
import BasketRow from "./BasketRow";

const BasketItems = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
            <BasketRow />
            <Divider style={styles.divider} />
          </ScrollView>
        </View>
        <View style={styles.checkout}>
          <View style={styles.price}>
            <Text style={[styles.regularText, { paddingBottom: 8 }]}>
              Total
            </Text>
            <Text style={styles.priceText}>$ 150</Text>
          </View>
          <TouchableOpacity style={styles.button} activeOpacity={0.4}>
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