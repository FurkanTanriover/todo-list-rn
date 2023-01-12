import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";

const TodoList = () => {
  const data = [
    {
      id: 1,
      title: "Todo 1",
    },
    {
      id: 2,
      title: "Todo 2",
    },
    {
      id: 3,
      title: "Todo 3",
    },
    {
      id: 4,
      title: "Todo 4",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View className="border rounded-md bg-slate-200 my-3 p-3 mx-8 flex flex-row justify-between items-center">
        <Text>{item.title}</Text>
        <TouchableOpacity>
          <Icons.TrashIcon color={"red"} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View className="pt-3 ">
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
