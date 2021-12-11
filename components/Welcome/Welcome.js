import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.headerText}>Get the freshest fruit.</Text>
          <Text style={styles.regularText}>
            We deliver the best and freshest fruit in town. Order for a fruit
            today!!!
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's Continue!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 0.42,
  },
  content: {
    paddingHorizontal: "7%",
    paddingTop: "10%",
    paddingBottom: "30%",
    justifyContent: "space-between",
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  regularText: {
    fontSize: 16,
  },
  button:{
    backgroundColor: "#FFA451",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText:{
    color: "white",
    fontSize: 16,
  }
});
