import { Text, View } from "react-native";
import React, { useEffect } from "react";

const Greeting = () => {
  const [greet, setGreet] = React.useState("");

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs < 12) {
      setGreet("Morning");
    } else if (hrs >= 12 && hrs <= 17) {
      setGreet("Afternoon");
    }
    setGreet("Evening");
  };
  useEffect(() => {
    findGreet();
  }, []);
  return (
    <View>
      <Text>{`Good ${greet}`}</Text>
    </View>
  );
};

export default Greeting;
