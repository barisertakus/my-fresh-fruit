import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeHeader from "../components/Home/HomeHeader";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20
  }
});
