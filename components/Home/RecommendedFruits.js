import React from "react";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import FruitCard from "./FruitCard";

const RecommendedFruits = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommended Fruits</Text>
      <ScrollView
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <FruitCard
          name={"Honey lime"}
          price={2000}
          image={<Image source={require("../../assets/images/fruit1.png")} />}
        />
        <FruitCard
          name={"Berry mango"}
          price={8000}
          image={<Image source={require("../../assets/images/fruit2.png")} />}
        />
        <FruitCard
          name={"Honey lime"}
          price={2000}
          image={<Image source={require("../../assets/images/fruit1.png")} />}
        />
      </ScrollView>
    </View>
  );
};

export default RecommendedFruits;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    color: "#27214D",
    fontWeight: "600",
  },
  cards: {
    marginTop: 20,
  },
});
