import React, { useState } from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CardList from "./CardList";

const FirstRoute = () => (
  <View>
    <CardList />
  </View>
);

const SecondRoute = () => (
  <View>
    <CardList />
  </View>
);

const ThirdRoute = () => (
  <View>
    <CardList />
  </View>
);

const FourthRoute = () => (
  <View>
    <CardList />
  </View>
);

const renderScene = SceneMap({
  hottest: FirstRoute,
  popular: SecondRoute,
  new: ThirdRoute,
  top: FourthRoute,
});

const renderTabBar = (props) => {
  return (
    <TabBar
      activeColor="#27214D"
      inactiveColor="#938DB5"
      labelStyle={{
        fontWeight: "600",
        textTransform: "capitalize",
        fontSize: 16,
      }}
      indicatorStyle={{
        backgroundColor: "#FFA451",
        paddingHorizontal: 20,
      }}
      pressColor="white"
      style={styles.tabBar}
      {...props}
    />
  );
};

function CategoryFruits() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "hottest", title: "Hottest" },
    { key: "popular", title: "Popular" },
    { key: "new", title: "New" },
    { key: "top", title: "Top" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default CategoryFruits;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    color: "black",
    elevation: 0,
    shadowOffset: { width: 0, height: 0 },
    marginTop: 10,
    marginHorizontal: 0,
    
  },
});
