import React from "react";
import { View,Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function SearchBar(){
    return(
        <View style={{flexDirection:"row",backgroundColor:"white",
       borderColor:"#eee",
       borderWidth:0.5, 
       width:360,
       height:50,
       alignSelf:"center",
       borderRadius:15,
       marginTop:14,
       shadowOffset: {
        width: 0,
         height: 3,
           },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
       }}>
          <GooglePlacesAutocomplete placeholder="Search....." 
           styles={{
            textInput:{
              
              fontWeight:"700",
              height:30,
              marginTop:5,    
            },
            textInputContainer:{
              backgroundColor:"white",
              borderRadius:15,
              flexDirection:"row",
              alignItems:"center",
              
            }
          }}
          renderLeftButton={()=>
            <View style={{margin:11
            }}>
           <FontAwesome5 name="search" size={20} color="red" />
            </View>
          }
          
          renderRightButton={()=>
          <View style={{
            margin:11
          }}>
          <MaterialIcons name="keyboard-voice" size={24} color="red"  style={{marginLeft:66}}/>
          </View>
          }
          />
        </View>
    )
}