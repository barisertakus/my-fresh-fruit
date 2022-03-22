import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { createRef } from "react";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import { itemsSelector, totalPriceSelector } from "../../features/basketSlice";
import Notification from "../../Notification";
import BasketRow from "./BasketRow";

const BasketItems = () => {
  const items = useSelector(itemsSelector);
  const totalPrice = useSelector(totalPriceSelector);

  const handlePress = () => {
    setVisible(true);
  };

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const sendNotification = async () => {
    await sendPushNotification(expoPushToken);
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );
  //   // This listener is fired whenever a notification is received while the app is foregrounded
  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       setNotification(notification);
  //     });

  //   // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log(response);
  //     });

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {items.map((item, i) => {
              return (
                <View key={i}>
                  <BasketRow item={item} />
                  <Divider style={styles.divider} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.checkout}>
          <View style={styles.price}>
            <Text style={[styles.regularText, { paddingBottom: 8 }]}>
              Total
            </Text>
            <Text style={styles.priceText}>$ {totalPrice}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            onPress={sendNotification}
          >
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BasketItems;

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
  checkout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    flex: 0.2,
    paddingBottom: 20,
  },
  price: {},
  button: {
    backgroundColor: "#FFA451",
    padding: 20,
    paddingHorizontal: 70,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  priceText: {
    color: "#27214D",
    fontWeight: "600",
    fontSize: 22,
  },
  regularText: {
    color: "#27214D",
    fontSize: 14,
  },
});

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Order Status",
    body: "Order has been shipped!",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
