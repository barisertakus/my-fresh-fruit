import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryFruits from "../components/Home/CategoryFruits";
import HomeHeader from "../components/Home/HomeHeader";
import RecommendedFruits from "../components/Home/RecommendedFruits";
import SearchBar from "../components/Home/SearchBar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{marginTop: 10,}}>
          <HomeHeader navigation={navigation} />
          <SearchBar />
        </View>

        <ScrollView
          style={styles.container}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ flex: 1 }}>
            <View>
              <RecommendedFruits navigation={navigation} />
            </View>
            <View style={{ flex: 1 }}>
              <CategoryFruits navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: { backgroundColor: "white", flex: 1 },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  padding: {},
  container: {
    flex: 1,
  },
});
