import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/outline";
//redux ref
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(todos);

  const getSavedTodos = async () => {
    const result = await AsyncStorage.getItem("todos");
    console.log("result",result);
  }

  useEffect(()=>{
    getSavedTodos()
  },[todos])

  const deleteItem = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View className="border rounded-md bg-slate-200 my-3 p-3 mx-8 flex flex-row justify-between items-center">
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Icons.TrashIcon color={"red"} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View className="pt-3 ">
      <FlatList data={todos} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
