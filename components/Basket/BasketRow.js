import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const BasketRow = () => {
  const [packs, setPacks] = useState(2);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/images/fruit1.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.name}>
          <Text style={[styles.header, {paddingBottom: 10}]}>Quinoa fruit salad</Text>
          <Text style={styles.regularText}>{packs} packs</Text>
        </View>
      </View>

      <View style={styles.price}>
        <Text style={styles.header}>$ 20</Text>
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
  content:{
    flexDirection: "row",
    alignItems: "center"
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
  name: {
    
  },
  price: {},
  header: {
    color: "#27214D",
    fontSize: 16,
    fontWeight: "600",
  },
  regularText: {
    color: "#27214D",
    fontSize: 12,
  },
});
