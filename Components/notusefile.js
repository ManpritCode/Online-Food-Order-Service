import React  from 'react'
import { Text, View,Image, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:"https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

export default function RestaurantItem({ navigation, ...props}) {
  
    return (
        <>
         {localRestaurants.map((restaurant,index) => ( 
        <TouchableOpacity
        
         key={index} 
         activeOpacity={0.5}
        style={{marginBottom:10,alignItems:"center"}} 
        
      
          >
           
        <View  
        style={{marginTop:10,padding:15,backgroundColor:"pink",width:380,borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10.32,
        
        elevation: 30,
    }}
                >
            <RestuarantImage Image={restaurant.image_url}/>
            <RestaurantInfo  
            name={restaurant.name} 
            rating={restaurant.rating}
            />
        </View>
       
        </TouchableOpacity>
         ))}
        </>
    );
  
    }
    const RestuarantImage = (props) =>(
        <>
        <Image source={{
            uri: props.Image,
        }}
        style={{width:"100%",height:180,borderRadius:10,borderColor: '#FF3D00',
        borderWidth: 3,}}
        />
        <TouchableOpacity style={{position:"absolute",right:30,top:50,}}>
        <Entypo name="heart-outlined" size={40} color="white" />
        </TouchableOpacity>
        </>
    );

    const RestaurantInfo = (props) =>(
        <View style={{
            flexDirection:"row",
            
            alignItems:"center",
            marginTop:10,}}>
        <View>
        <Text style={{
            fontSize:15,
            fontWeight:"bold",
        }}>{props.name}</Text>
        <Text style={{fontSize:13,color:"red"}}>30-45 . - min</Text>
        </View>
        <View style={{
            backgroundColor:"blue",
            height:30,
            width:30,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:15,
            }}>
        <Text>{props.rating}</Text>
        </View>
        </View>
    )