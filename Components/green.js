import React from "react";

 
/*import LinearGradient from 'react-native-linear-gradient';*/
import { View,Text ,Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
export default function Green(){
    return(
       <View>
        <LinearGradient 
         start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={['#D1F1FA','transparent']} 
        style={{height:70,
        
        margin:15,
        borderRadius:10,
        flexDirection:"row"
        }}
      > 
      <View>
        <Text style={{
         margin:9,
         fontSize:20,
         color:"green",
         fontWeight:"500"
         
        }}>
          100% Green Deliveries
        </Text>
        <View style={{flexDirection:"row"}}>
        <Text style={{
            marginLeft:15,
            marginTop:-10,
            fontWeight:"600",
            fontSize:10
        }}>
          Learn more
        </Text>
        <FontAwesome name="arrow-right" size={10} color="green" style={{
            marginTop:-7,
            marginLeft:5
        }} />
        </View>
        </View>
        
        <Image source={{uri:"https://i.gifer.com/origin/ca/cad74d565a8d1c60dfb386633afb6b62_w200.webp"}} style={{
       height:50,
       width:50,
       marginLeft:90,
       marginTop:10

       
       
       
       }}/>
       
      </LinearGradient>
      </View>
      
     
     
    )
    
}

