import React from "react";
import { View,Text ,Image, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


export default function HeaderTab({navigation}) {
    return(
        <View style={{
            marginTop:50,
            flexDirection:"row",
            marginLeft:7,
        }}
        >
            <View>
            <Ionicons name="location-sharp" size={35} color="red" />
            </View>
            <View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('addres')
                }}>
                <Text style={{
                    
                    fontSize:12,
                    fontWeight:"900"
                }}>HOME <AntDesign name="down" size={14} color="black" /></Text>
                <Text style={{
                    fontSize:11,
                    fontWeight:"500",
                    color:"grey",
                    marginTop:5
                }}>Tansisk vihar , lan 2,First floor, Danda Lakhond</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginLeft:20,
                borderWidth:1,
                borderColor:"rgb(230,230,231)",
                borderRadius:10,
                padding:10,
                backgroundColor:"white",
                shadowColor: "#000",
                alignItems:"center",

               shadowOffset: {
	           width: 0,
            	height: 3,
                },
               shadowOpacity: 0.29,
               shadowRadius: 4.65,

               elevation: 7,
            }}>
                <Image source={{uri:"https://static.thenounproject.com/png/2532298-200.png"}} style={{width:18,height:18, justifyContent:"center"}}/>
            </View>
            <View style={{
                   padding:1,
                
            }}> 
                <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&usqp=CAU"}} style={{width:50,height:50,flex:1}}/>
                </View>
        </View>
    )
}