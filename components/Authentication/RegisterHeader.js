import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AuthenticationHeader = () => {
  return (
    <View style={styles.fruit}>
      <View style={styles.images}>
        <Image source={require("../../assets/images/welcome2.png")} />
        <Image source={require("../../assets/images/welcome3.png")} />
        <View style={styles.ellipse}>
          <Image source={require("../../assets/images/ellipse1.png")} />
        </View>
      </View>
    </View>
  );
};

export default AuthenticationHeader;

const styles = StyleSheet.create({
  fruit: {
    flex: 0.58,
    backgroundColor: "#FFA451",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  images: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 50,
  },
  ellipse: {
    paddingTop: 20,
  },
});
