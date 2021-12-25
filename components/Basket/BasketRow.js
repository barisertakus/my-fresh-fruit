import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BasketRow = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          navigation.navigate("ProductDetails", item);
        }}
      >
        <View style={styles.imageWrapper}>
          <Image source={item.src} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.name}>
          <Text style={[styles.header, { paddingBottom: 10 }]}>
            {item.name}
          </Text>
          <Text style={styles.regularText}>{item.quantity} packs</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.price}>
        <Text style={styles.header}>$ {item.price * item.quantity}</Text>
      </View>
    </View>
  );
};

export default BasketRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {
    padding: 10,
    backgroundColor: "#F3F3F3",
    marginRight: 10,
    borderRadius: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  name: {},
  price: {},
  header: {
    color: "#27214D",
    fontSize: 16,
    fontWeight: "600",
  },
  regularText: {
    color: "#27214D",
    fontSize: 14,
  },
});
