import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import FruitCard from "./FruitCard";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const fruits = [
  {
    name: "Honey lime",
    price: 2000,
    image: <Image source={require("../../assets/images/fruit1.png")} />,
  },
  {
    name: "Berry mango",
    price: 8000,
    image: <Image source={require("../../assets/images/fruit2.png")} />,
  },
  {
    name: "Quinoa Salad",
    price: 2000,
    image: <Image source={require("../../assets/images/fruit3.png")} />,
  },
  {
    name: "Tropical Fruit",
    price: 2000,
    image: <Image source={require("../../assets/images/fruit4.png")} />,
  },
  {
    name: "Berry mango",
    price: 8000,
    image: <Image source={require("../../assets/images/fruit5.png")} />,
  },
  {
    name: "Honey lime",
    price: 2000,
    image: <Image source={require("../../assets/images/fruit1.png")} />,
  },
  {
    name: "Berry Mango",
    price: 2000,
    image: <Image source={require("../../assets/images/fruit1.png")} />,
  },
  {
    name: "Quinoa Salad",
    price: 8000,
    image: <Image source={require("../../assets/images/fruit2.png")} />,
  },
  {
    name: "Honey lime",
    price: 2000,
    image: <Image source={require("../../assets/images/fruit1.png")} />,
  },
];

const CardList = ({ name }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <ScrollView
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {shuffle(fruits).map((fruit, i) => {
          return (
            <FruitCard
              key={i}
              name={fruit.name}
              price={fruit.price}
              image={fruit.image}
              onPress={()=>navigation.navigate("ProductDetails")}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardList;

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
