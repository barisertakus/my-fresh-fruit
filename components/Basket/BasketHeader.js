import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const BasketHeader = ({ navigation }) => {
  return (
    <View style={styles.fruit}>
      <SafeAreaView>
        <View style={styles.safeArea}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.back}>
              <Icon name="arrow-back-ios" size={24} style={styles.icon} />
              <Text style={styles.text}>Go Back</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Basket</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BasketHeader;

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
    backgroundColor: "white",
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
