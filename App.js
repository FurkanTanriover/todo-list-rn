import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoHeader from "./src/components/TodoHeader";
import TodoList from "./src/components/TodoList";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList />
        <Toast />
      </SafeAreaView>
    );
  };
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
