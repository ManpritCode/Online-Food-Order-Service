import React from "react";
import { View, Text, Image } from "react-native";

const items = [{
    Image: require("../assets/images/250.jpg"),
},
{
    Image: require("../assets/images/60%.jpg"),
},
{
    Image: require("../assets/images/free.jpg"),
},
]

export default function OffersBar() {
    return (
        <>
            <View style={{

                height: 170,
            }} >

                <View style={{


                    flexDirection: "row",
                    marginTop: 20
                }}>
                    <View style={{
                        height: 1.6,
                        width: 120,
                        backgroundColor: "lightgrey",
                        margin: 10
                    }}></View>


                    <Text style={{
                        fontWeight: "600"
                    }}>OFFERS FOR YOU</Text>
                    <View style={{
                        height: 1.6,
                        width: 120,
                        backgroundColor: "lightgrey",
                        margin: 10
                    }}></View>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    margin: 15,

                    alignItems: "center",

                }}>
                    {items.map((item, index) => (
                        <View key={index} >
                            <Image source={item.Image} style={{
                                width: 100,
                                height: 100,
                                borderRadius: 10,

                            }} />
                        </View>
                    ))}
                </View>
            </View>

        </>
    )
}