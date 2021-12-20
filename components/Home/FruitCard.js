import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const FruitCard = ({ name, price, image, onPress }) => {
  return (
    <View style={styles.container} activeOpacity={0.7}>
      <View style={styles.icon}>
        <TouchableOpacity>
          <Icon name="favorite-border" size={20} color="#FFA451" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPress || undefined} style={styles.image}>{image}</TouchableOpacity>

      <View style={styles.name}>
        <Text style={styles.nameText}>{name}</Text>
      </View>

      <View style={styles.price}>
        <Text style={styles.priceText}>$ {price}</Text>
        <TouchableOpacity>
          <Icon name="add-circle-outline" size={24} color="#FFA451" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FruitCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9F9",
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingTop : 20,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  icon: {
    alignItems: "flex-end",
    position : "absolute",
    top: 10,
    right: 10,
  },
  image: {
    paddingHorizontal: 25,
  },
  price: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    alignItems: "center",
  },
  nameText: {
    paddingTop: 10,
    fontSize: 14,
    color: "#27214D",
    fontWeight: "600",
  },
  priceText: {
    color: "#FFA451",
    fontSize: 14,
  },
});
