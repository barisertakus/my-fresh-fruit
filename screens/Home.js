import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryFruits from "../components/Home/CategoryFruits";
import HomeHeader from "../components/Home/HomeHeader";
import RecommendedFruits from "../components/Home/RecommendedFruits";
import SearchBar from "../components/Home/SearchBar";

const Home = ({navigation}) => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <HomeHeader />
          <SearchBar />
          <RecommendedFruits navigation={navigation} />
          <CategoryFruits navigation={navigation} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: { backgroundColor: "white", flex: 1 },
  safeArea: { flex: 1 },
  padding: {},
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
});
