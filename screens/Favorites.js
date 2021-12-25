import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FavoritesHeader from "../components/Favorites/FavoritesHeader";
import FavoritesItems from "../components/Favorites/FavoriteItems";
import { useLayoutEffect } from "react";

const Favorites = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={styles.container}>
      <FavoritesHeader navigation={navigation} />
      <FavoritesItems />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
