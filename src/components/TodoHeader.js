import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { addTodo } from "../redux/todoSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoHeader = () => {
  // redux ref
  const dispatch = useDispatch();
  // state
  const [todo, setTodo] = useState("");
  const id= Date.now()
  console.log("1",id);
  const addTodos = () => {
    if (todo.trim().length == 0) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Please enter a todo",
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60,
        bottomOffset: 40,
      });
      setTodo("");
      return;
    } else {
      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: "Todo added successfully",
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60,
        bottomOffset: 40,
      });
      dispatch(
        addTodo({
          id: id,
          name: todo,
        })
      );
      const savedTodo={
        id:id,
        name:todo
      }
        AsyncStorage.setItem("todos",JSON.stringify(savedTodo));
    }
  };

  return (
    <View className=" p-3">
      {/* header */}
      <Text className="flex  text-center text-lg font-bold mt-5">TodoList</Text>
      {/* input */}
      <TextInput
        className="border-2 p-3 border-gray-300 rounded-lg w-11/12 mx-auto mt-5"
        placeholder="Add Todo"
        onChangeText={setTodo}
        value={todo}
      />
      {/* button */}
      <TouchableOpacity
        className="bg-gray-600 w-8/12 mx-auto mt-5 p-3 rounded-lg"
        onPress={() => {
          addTodos();
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
