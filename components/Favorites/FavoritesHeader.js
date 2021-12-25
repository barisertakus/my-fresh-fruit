import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const FavoritesHeader = ({ navigation }) => {
  return (
    <View style={styles.fruit}>
      <SafeAreaView>
        <View style={styles.safeArea}>
          <TouchableOpacity style={styles.back} onPress={()=>navigation.toggleDrawer()}>
          <Icon name="sort" size={24} />
        </TouchableOpacity>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Favorites</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FavoritesHeader;

const styles = StyleSheet.create({
  fruit: {
    flex: 0.2,
    backgroundColor: "#FFA451",
  },
  safeArea: {
    flexDirection: "row",
  },
  icon: {
    paddingLeft: 2,
  },
  text: {
    marginLeft: -3,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    padding: 5,
    borderRadius: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600"
  },
});
