import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View,Text,Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
 
    { 
         title : "sweet corn",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "burger",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$65",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "smosa",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$123",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Rols",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$36",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "pizza",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$56",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"}, 
];
 const styles = StyleSheet.create({
    MeniItemStyle : {
        flexDirection:"row",
        
        margin:0,
    },
    titleStyle:{
        fontSize:19,
        fontWeight:"600",
        color:"white"
    }
 })

 export default function MenuItems(props) {

   
    const {restaurant } = props.route.params;
      const dispatch =useDispatch();
   
      const selectitems = (item,checkboxValue)=>dispatch({
        type:"ADD_TO_CART",
        payload:{
           ...item,
            restuarantName:restaurant.restuarantname,
            restaurantid:restaurant._id,
             checkboxValue:checkboxValue}
    })
    const cartItems = useSelector(state => state.cartReducer.selecteditems.items)
 
 
    const isfoodincart = (food, cartItems) =>
        Boolean(cartItems.find((item)=>item.title === food.title))
    
     
    return(
        < ScrollView style={{
            width:370,
            alignSelf:"center",
            marginBottom:40
        }}>
        {foods.map((food,index) => (
            
        <View style={{
            backgroundColor:"red",
            height:140,
            marginBottom:10,
            borderRadius:20
            
        }}>
        <View key={index}
        style={styles.MeniItemStyle}>
            <BouncyCheckbox
            onPress={(checkboxValue) => {
                
                selectitems(food,checkboxValue)
                
            }
            }
            
            isChecked={isfoodincart(food ,cartItems)}
            style={{margin:5}}
            iconStyle={{borderColor:"",borderRadius:0,}} 
            fillColor="grey"/>
           <FoodInfo food={food} /> 
           <FoodImage food = {food} />
        </View>
        
        </View>
        ))}
        </ScrollView>
    )
     }


 const FoodInfo = (props) =>(
    <View style = {{
        width:200,
        justifyContent:"space-evenly",
    }}>
        <Text style = {styles.titleStyle}> {props.food.title}</Text>
        <Text style={{color:"white"}}>{props.food.description}</Text>
        <Text  style={{color:"white"}}>{props.food.price}</Text>
            </View>
 )
  const FoodImage = (props) =>(
    <View style={{
    
    }}>
        <Image source={{uri:props.food.Image}} style={{width:100,height:100,borderRadius:8,margin:15}} />
    </View>
  )