import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoHeader from "./src/components/TodoHeader";
import TodoList from "./src/components/TodoList";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Greeting from "./src/components/Greeting";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
export default function App() {
  const Stack = createNativeStackNavigator();

  const RootApp = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
