import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../features/basketSlice";
import { addfavorites, itemsSelector, toggleFavorite } from "../../features/favoritesSlice";
import { closeSnackbar, openSnackbar } from "../../features/snackBarSlice";

const FruitCard = ({ item, onPress }) => {
  const dispatch = useDispatch();
  
  const favorites = useSelector(itemsSelector);
  const isFavorite = () => {
    return favorites.find(favorite=> favorite.name === item.name)
  }

  const handleFavorite = () => {
    dispatch(toggleFavorite(item));
    dispatch(openSnackbar({ message: `Product has been ${!isFavorite() ? "added to" : "removed from"} the Favorites !`, color : "#FF8C42" }));
    setTimeout(() => {
      dispatch(closeSnackbar());
    }, 2000);
  };
  
  const addToCart = () => {
    dispatch(addBasket({...item, quantity: 1}));
    dispatch(openSnackbar({ message: "Product has been added to the cart !", color : "orange" }));
    setTimeout(() => {
      dispatch(closeSnackbar());
    }, 2000);
  };

  return (
    <View style={styles.container} activeOpacity={0.7}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={handleFavorite}>
          <Icon name={isFavorite() ? "favorite" : "favorite-border"} size={20} color="#FFA451" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPress || undefined} style={styles.image}>
        <Image
          source={item.src}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.name}>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>

      <View style={styles.price}>
        <Text style={styles.priceText}>$ {item.price}</Text>
        <TouchableOpacity onPress={addToCart}>
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
    paddingTop: 10,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  icon: {
    alignItems: "flex-end",
    position: "relative",
    top: 0,
    right: 0,
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
