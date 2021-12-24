import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsHeader = ({image}) => {

  const navigation = useNavigation();

  return (
    <View style={styles.fruit}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <View style={styles.back}>
            <Icon name="arrow-back-ios" size={24} style={styles.icon} />
            <Text style={styles.text}>Go Back</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1 }}></View>
      </SafeAreaView>
      <View style={styles.image}>
        <Image source={image} style={{height: 175, width: 175}} resizeMode="contain" />
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  fruit: {
    flex: 0.40,
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
  image: {
    paddingBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
