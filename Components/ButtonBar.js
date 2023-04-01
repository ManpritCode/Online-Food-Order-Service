import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-shadow-cards"
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function ButtonBar() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
            marginTop: 15,
            flexDirection: "row",
            height:55,

        }}>
            <Card style={{
                padding: 0, margin: 5, width: 80,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                flexDirection: "row"
            }}>
                <SimpleLineIcons name="equalizer" size={12} color="black" style={{ marginRight: 5 }} />
                <Text style={{ alignSelf: "center", fontSize: 11, fontWeight: "700", padding: 5 }}>Sort</Text>
                <AntDesign name="caretdown" size={9} color="black" style={{ marginLeft: 5 }} />
            </Card>
            <Card style={{
                margin: 5, width: 80,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,

            }}>
                <Text style={{ alignSelf: "center", fontSize: 11, fontWeight: "700", padding: 5 }}>Fast Delivery</Text>
            </Card>
            <Card style={{
                padding: 0, margin: 5, width: 80,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
            }}>
                <Text style={{ alignSelf: "center", fontSize: 11, fontWeight: "700", padding: 5 }}>Rating 4.0+</Text>
            </Card>
            <Card style={{
                padding: 0, margin: 5, width: 80,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
            }}>
                <Text style={{ alignSelf: "center", fontSize: 11, fontWeight: "700", padding: 5 }}>New Arrivals</Text>
            </Card>
            <Card style={{
                padding: 0, margin: 5, width: 80,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
            }}>
                <Text style={{ alignSelf: "center", fontSize: 11, fontWeight: "700", padding: 5 }}>Pure Veg</Text>
            </Card>
            <Card style={{
                padding: 0, margin: 5, width: 80,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                flexDirection: "row"
            }}>

                <Text style={{ alignSelf: "center", fontSize: 11, fontWeight: "700", padding: 5 }}>Cuisines</Text>
                <AntDesign name="caretdown" size={9} color="black" style={{ marginLeft: 5 }} />
            </Card>
            <Card style={{
                padding: 0, margin: 5, width: 80,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                flexDirection: "row"
            }}>
                <Text style={{ alignSelf: "center", fontSize: 11, fontWeight: "700", padding: 5 }}>More</Text>
                <AntDesign name="caretdown" size={9} color="black" style={{ marginLeft: 5 }} />

            </Card>
        </ScrollView>
    )
}