import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const HomeHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="sort" size={24} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.basket}
          onPress={() => navigation.navigate("Basket")}
        >
          <FontAwesome name="shopping-basket" size={24} color="#FFA451" />
          <Text style={styles.text}>My basket</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.headerText}>Hello Baris, </Text>
          <Text style={[styles.headerText, styles.textBold]}>
            What fruit combo
          </Text>
        </View>
        <Text style={[styles.headerText, styles.textBold]}>
          do you want today?
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  text: {
    color: "#27214D",
    fontSize: 12,
  },
  basket: {
    alignItems: "center",
  },
  header: {
    marginTop: 20,
  },
  headerText: {
    color: "#27214D",
    fontSize: 18,
  },
  textBold: {
    fontWeight: "600",
  },
});
