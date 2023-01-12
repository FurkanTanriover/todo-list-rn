import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';

export default function App() {
  const rootApp = ()=>{
    return(
      <View>
        <TodoHeader/>
        <TodoList/>
      </View>
    )
  }
  return (
    <SafeAreaView>
      {rootApp()}
    </SafeAreaView>
  );
}

