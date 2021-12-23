import { store } from "./app/store";
import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "./RootNavigation";

export default function App() {
  LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
