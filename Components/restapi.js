import react from "react";
import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Restapi() {
   
    const [count, setCount] = useState();

    const handleClick = () => {
      setCount(count + 1);
    };
   

    return (
        <View>

            <TouchableOpacity style={{
                alignContent: "center", backgroundColor: "green",
                justifyContent: "center",
                marginTop: 200
            }} onPress={() => {
                buttonl()
            }}><Text >{count}</Text></TouchableOpacity>
            <Button title="me" onPress={() => { handleClick() }} />
        </View>

    ) 
}
/* {data.map((item) => (
    <Text key={item.id}>{item.title}</Text>
  ))}*/