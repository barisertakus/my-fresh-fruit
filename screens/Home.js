import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/Home/HomeHeader";
import RecommendedFruits from "../components/Home/RecommendedFruits";
import SearchBar from "../components/Home/SearchBar";

const Home = () => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <HomeHeader />
          <SearchBar />
          <RecommendedFruits />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: { backgroundColor: "white", flex: 1 },
  safeArea: { flex: 1 },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
});
