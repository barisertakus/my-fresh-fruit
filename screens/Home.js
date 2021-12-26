import React from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SnackbarComponent from "react-native-snackbar-component";
import { useDispatch, useSelector } from "react-redux";
import CategoryFruits from "../components/Home/CategoryFruits";
import HomeHeader from "../components/Home/HomeHeader";
import RecommendedFruits from "../components/Home/RecommendedFruits";
import SearchBar from "../components/Home/SearchBar";
import { closeSnackbar, selectSnackbar } from "../features/snackBarSlice";

const Home = ({ navigation }) => {
  const snackbar = useSelector(selectSnackbar);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View>
        <SnackbarComponent
            visible={snackbar.visible}
            textMessage={snackbar.message}
            actionHandler={() => dispatch(closeSnackbar())}
            accentColor="blue"
            position="top"
            autoHidingTime={2000}
            backgroundColor={snackbar.color}
            messageColor="white"
            actionText="Ok!"
          />
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >

          <View style={{ marginTop: 10 }}>
            <HomeHeader navigation={navigation} />
            <SearchBar navigation={navigation} />
          </View>

          <RecommendedFruits navigation={navigation} />
        </ScrollView>
        <View style={{ height: 270 }}>
          <CategoryFruits navigation={navigation} />
        </View>
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
    paddingBottom: 20,
  },
  padding: {},
  container: {
    flex: 1,
  },
});
