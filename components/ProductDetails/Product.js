import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBasket } from "../../features/basketSlice";
import { itemsSelector, toggleFavorite } from "../../features/favoritesSlice";

const Product = ({product}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const favorites = useSelector(itemsSelector);
  const isFavorite = () => {
    return favorites.find(favorite=> favorite.name === product.name)
  }

  const increase = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decrease = () => {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
  };

  const handleBasket = () => {
    dispatch(addBasket({...product, quantity}));
    navigation.goBack();
  }

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>{product.name}</Text>
        <View style={styles.priceDetails}>
          <View style={styles.quantity}>
            <TouchableOpacity onPress={decrease} activeOpacity={0.4}>
              <Icon name="remove-circle-outline" size={32} color="#27214D" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increase} activeOpacity={0.4}>
              <Icon name="add-circle-outline" size={32} color="#FFA451" />
            </TouchableOpacity>
          </View>
          <Text style={styles.priceText}>$ {product.price}</Text>
        </View>

        <Divider style={styles.divider} />
        <ScrollView style={{ flex: 0.65 }} showsVerticalScrollIndicator={false}>
          <View style={styles.ingredients}>
            <View style={styles.subHeader}>
              <View style={styles.subHeaderWrapper}>
                <Text style={styles.subHeaderText}>One Pack Contains:</Text>
              </View>
              <View style={{ flex: 1 }}></View>
            </View>
            <Text style={styles.regularText}>
              {product.ingredients}
            </Text>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.details}>
            <Text style={styles.detailsText}>
              {product.description}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.addBasket}>
          <TouchableOpacity onPress={()=>dispatch(toggleFavorite(product))}>
            <Avatar
              size={60}
              overlayContainerStyle={{
                backgroundColor: "#FFF7F0",
                borderRadius: 50,
              }}
              icon={{
                name: "heart",
                color: "#FFA451",
                size: 28,
                type: isFavorite() ? "material-community" : "font-awesome-5",
              }}
              activeOpacity={0.7}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={handleBasket}>
            <Text style={styles.buttonText}>Add to basket</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFA451",
    flex: 0.6,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  header: {
    color: "#27214D",
    fontSize: 24,
    fontWeight: "600",
  },
  priceDetails: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.5,
  },
  quantityText: {
    color: "#27214D",
    fontSize: 24,
  },
  priceText: {
    color: "#27214D",
    fontSize: 24,
  },
  divider: {
    marginVertical: 20,
  },
  ingredients: {
    marginTop: 10,
  },
  subHeader: {
    flexDirection: "row",
  },
  subHeaderWrapper: {
    borderBottomColor: "#FFA451",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#27214D",
  },
  regularText: {
    fontSize: 16,
    color: "#27214D",
    marginTop: 20,
  },
  detailsText: {
    fontSize: 12,
  },
  addBasket: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 0.35,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#FFA451",
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
