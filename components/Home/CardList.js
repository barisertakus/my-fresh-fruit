import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import FruitCard from "./FruitCard";
import { db } from "../../firebase";
import { images } from "../../Images";
import { collection, getDocs } from "firebase/firestore";

const CardList = () => {
  const [fruits, setFruits] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getDocs(collection(db, "fruits"))
      .then((response) =>
        setFruits(
          response.docs.map((doc, i) => {
            return { ...doc.data(), ...getImageFromSrc(doc.data().name) };
          })
        )
      )
      .catch((error) => console.log(error));
  }, []);


  const getImageFromSrc = (name) => {
    return images.filter((image) => image.name === name)[0];
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {fruits.map((fruit, i) => {
          return (
            <FruitCard
              key={i}
              name={fruit.name}
              price={fruit.price}
              image={
                <Image
                  source={fruit.src}
                  style={{ width: 80, height: 80 }}
                  resizeMode="contain"
                />
              }
              onPress={() => {
                navigation.navigate("ProductDetails", fruit);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 18,
    color: "#27214D",
    fontWeight: "600",
  },
  cards: {
    marginTop: 20,
  },
});
