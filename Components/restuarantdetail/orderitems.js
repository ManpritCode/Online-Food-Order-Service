import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Orderitems(price) {
   
    
    console.log("cart items",price);
    
    return (
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:"#999",
      }}>
        <Text style={{color:"red",fontWeight:'600',fontSize:16}}>{price.price}</Text>
        <Text style={{ opacity:0.7, fontWeight:'600',fontSize:16}}>{price.title}</Text>
        
      </View>
    )
  }

