import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { db } from "../../firebase";
import { images } from "../../Images";

import FruitCard from "./FruitCard";

const RecommendedFruits = ({ navigation }) => {
  const [recommendedFruits, setRecommendedFruits] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "fruits"))
      .then((response) =>
        setRecommendedFruits(
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
      <Text style={styles.header}>Recommended Fruits</Text>
      <ScrollView
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {recommendedFruits.map((fruit, i) => {
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

export default RecommendedFruits;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
