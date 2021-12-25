import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import { itemsSelector } from "../../features/favoritesSlice";
import FavoriteRow from "./FavoriteRow";

const FavoriteItems = () => {
  const items = useSelector(itemsSelector);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {items.map((item, i) => {
              return (
                <View key={i}>
                  <FavoriteRow item={item} />
                  <Divider style={styles.divider} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={{ flex: 0.1 }}></View>
      </SafeAreaView>
    </View>
  );
};

export default FavoriteItems;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: "white",
    paddingTop: 10,
  },
  safeArea: {
    flex: 1,
  },
  divider: {
    marginTop: 20,
  },
});
