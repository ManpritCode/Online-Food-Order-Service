import React, { useState } from "react";
import { Button, SafeAreaView, View, FlatList, TouchableOpacity, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ButtonBar from "../Components/ButtonBar";

import Green from "../Components/green";
import HeaderTab from "../Components/headerTab";
import OffersBar from "../Components/OffersBar";
import RestruarantItems from "../Components/restorentItems";
import SearchBar from "../Components/Searchbar"
import react, { useEffect } from "react";
import axios from "axios";
import { localRestaurants } from "../Components/restorentItems";
import { useDispatch } from "react-redux";

export default function Home({ navigation }) {


  const [ldata, setData] = useState(localRestaurants);

  useEffect(() => {

    axios.get('http://192.168.1.3:3000/alldata')
      .then(response => {
        const pdata = (response.data)
        setData(pdata.data)
      })
      .catch(error => {
        console.log(error);
      });
  },);

 // console.log("workizng")
   
   

  return (
    <SafeAreaView>
      <HeaderTab navigation={navigation}  />
      <SearchBar />
      <ButtonBar />
      <ScrollView style={{
        height: 580
      }}>
        <OffersBar />
        

        <Green />


        <RestruarantItems ldata={ldata} navigation={navigation} />

      </ScrollView>
    </SafeAreaView>

  )

}

/*
     */
