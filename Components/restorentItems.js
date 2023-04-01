import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export const localRestaurants =


  [
    {
      _id: "6413f33efa2024133dd5cff2",
      restuarantname: 'my hotel',
      location: 'bathinda',
      cityname: 'Bathinda',
      itemtype: 'non-veg',
      phoneno: '255',
      __v: 0
    },
    {
      _id: "641440798e468918fcc879dc",
      restuarantname: 'manpreet',
      location: 'manpreet',
      cityname: 'manpreet',
      itemtype: 'manpreet',
      phoneno: 'manpreet',
      __v: 0
    },
    {
      _id: "641440838e468918fcc879df",
      restuarantname: 'manpreet',
      location: 'manpreet',
      cityname: 'manpreet',
      itemtype: 'manpreet',
      phoneno: 'manpreet',
      __v: 0
    },
    {
      _id: "64148af4f24833f3bb79f8db",
      restuarantname: 'naglahotel',
      location: 'jjkkdkms',
      cityname: 'njkl',
      itemtype: 'non',
      phoneno: 'jdmsmdinm',
      __v: 0
    },

    {
      _id: "6414967ff24833f3bb79f8e3",
      restuarantname: 'naglahotel',
      location: 'jjkkdkms',
      cityname: 'njkl',
      itemtype: 'non',
      phoneno: 'jdmsmdinm',
      __v: 0
    }
  ]


export default function RestruarantItems({ navigation, ...props }) {


  const alldata= props.ldata
  return (
    <>
      {
        props.ldata.map((restaurant, index) => (
          <TouchableOpacity
            onPress={() => {
              console.log("workin")
              navigation.navigate("resturantdetaile",{
               name:restaurant.restuarantname,
             restaurant
              
              })
            }}
            key={index}
            activeOpacity={0.5}
            style={{ marginBottom: 10, alignItems: "center" }}


          >

            <View
              style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: "white",
                width: 380,
                height:310,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 10,
                  height: 8,
                },
                shadowOpacity: 0.2,
                shadowRadius: 10.32,
                elevation: 30,
              }}
            ><View>

                <Image source={{
                  uri:
                    restaurant.imageurl
                }}
                  style={{
                    width: "100%",
                    height: 280,
                    borderRadius: 10,
                    borderColor: '#FF3D00',
                    borderWidth: 1, resizeMode:"stretch",
                    
                  }}
                />
                <TouchableOpacity style={{ position: "absolute", right: 30, top: 50, }}>
                  <Entypo name="heart-outlined" size={40} color="white" />
                </TouchableOpacity>
                <View style={{
                  flexDirection: "row",
                  top: -86
                }}>
                  <LinearGradient
                    colors={['transparent', 'black']}
                    style={{
                      height: 85,
                      width: 350,


                      borderRadius: 10,
                      flexDirection: "row"
                    }}>
                    <View>
                      <Text style={{
                        fontSize: 30,
                        marginLeft: 10,
                        fontWeight: "bold",
                        color: "white"
                      }}>{restaurant.restuarantname}</Text>
                      <Text style={{
                        marginLeft: 10,
                        color: "white"
                      }}>{restaurant.item1description}</Text>
                    </View>
                  </LinearGradient>
                </View>
                <View style={{

                  height: 30,
                  width: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                }}>
                  <Text>{restaurant.item4price}</Text>
                </View>
              </View>

            </View>

          </TouchableOpacity>
        ))}
    </>
  );

}
const RestuarantImage = (props) => (
  <>

  </>
);

const RestaurantInfo = (...props) => (
  <>
  </>
)


