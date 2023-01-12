import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TodoHeader = () => {
  const [todo, setTodo] = useState("");
  return (
    <View className="bg-slate-500 p-3">
      {/* header */}
      <Text className="flex  text-center text-lg font-bold mt-5">TodoList</Text>
      {/* input */}
      <TextInput
        className="border-2 p-3 placeholder:bg-slate-200 border-gray-300 rounded-lg w-11/12 mx-auto mt-5"
        placeholder="Add Todo"
        onChangeText={setTodo}
        value={todo}
      />
      {/* button */}
      <TouchableOpacity
        className="bg-gray-600 w-8/12 mx-auto mt-5 p-3 rounded-lg"
        onPress={() => {
          setTodo("");
        }}
      >
        <Text className="text-center text-white">Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({});
