import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Greeting from "../components/Greeting";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="p-3">
        <Greeting />
        <TodoHeader />
        <TodoList />
        <Toast />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
