import react from "react";
import { Text, TouchableOpacity, View, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import Orderitems from "./orderitems";

export default function Aboute() {

       





    const [modalVisble, setmodalVisble] = useState(false);
    const { items, restuarantName, restaurantid } = useSelector((state) => state.cartReducer.selecteditems)
    const { customerid } = useSelector((state) => state.cartReducer1.selectid)
    const { userdata } = useSelector((state) => state.cartReducer2.userinformation)
    //  console.log("customer id ",customerid)
    //  console.log("restourantid",restaurantid)
    //  console.log('useraddres',userdata)
      
  console.log(items)
    const orderPlace =() =>{
                    console.log("post data")
        fetch('http://192.168.1.3:3000/orders',{
            
               method:"POST",
               headers:{
                'Content-type':'application/json'
               },
               body:JSON.stringify(customerid) 
               
            }).then(res=>res.json()).then(
               data=>{
                
                if(data.error){
                    console.log("order no  buy")
                }else{
                    alert("order save")
                }
               }

            )
            

      }

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0)

    const totalusd = total.toLocaleString('en', {
        style: 'currency',
        currency: "USD",
    })
    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },
        modalChekoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,

        },
        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
            color: "red"
        },
        subtotalcontainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,

        },
        subtotaltext: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10
        }
    })
    console.log(totalusd)
    const checkoutModalContent = () => {

        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalChekoutContainer}>
                        <Text style={styles.restaurantName}>{restuarantName}</Text>
                        {items.map((item, index) => (

                            <Orderitems key={index} price={item.price} title={item.title}
                            />

                        ))
                        }
                        <View style={styles.subtotalcontainer}>
                            <Text style={styles.subtotaltext}>Subtotal</Text>
                            <Text style={styles.subtotaltext}>{totalusd}</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                   
                                    orderPlace();
                                    setmodalVisble(false)
                                }}
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative"
                                }}>
                                <Text style={{ color: "white" }}>Checkout</Text>
                                <Text style={{
                                    position: "absolute",
                                    right: 20,
                                    fontSize: 15,
                                    top: 14,
                                    color: "white"
                                }}
                                >{total ? totalusd : ""}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </>
        )
    }

    return (
        <>
            <Modal animationType="slide" visible={modalVisble}
                transparent={true}
                onRequestClose={() => setmodalVisble(false)}
            >
                {checkoutModalContent()}
            </Modal>

            {total ? (
                <View style={{
                    backgroundColor: "black",
                    height: 50,
                    width: 180,
                    borderRadius: 20,

                    justifyContent: "center",
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            setmodalVisble(true)

                        }}
                    >
                        <Text style={{
                            color: "white",
                            textAlign: "center",

                            alignItems: "center",

                        }}>order items {totalusd}</Text>
                    </TouchableOpacity>
                </View>
            )
                : (<></>
                )}
        </>
    )
}