
import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup({ navigation }) {
    const [ldata,setldata]=useState({
        email:'',
        password:'',
        confirmpassword:''
    })
    const [errmsg,seterrmsg]=useState(null)

 const userregister = () =>{

    if(ldata.email ==''|| ldata.password ==''||ldata.confirmpassword ==''){
        seterrmsg("please fill column")
    }
    if (ldata.password !=ldata.confirmpassword)
{
       seterrmsg('password and confirm password noy match')
 } else fetch('http://192.168.1.3:3000/Signupuser',{
method:"POST",
headers:{
    'Content-type':'application/json'
},
body:JSON.stringify(ldata)
 }).then(res=> res.json()).then(
    data =>{
        if(data.error){
            seterrmsg(data.error)
        }else{
            alert("accunt create successfully")
            navigation.navigate('login')
        }
    }
 )  

}

    return (
    <SafeAreaView style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flex: 1
    }}>
        <View style={{
            backgroundColor: "red",
            height: 400,
            width: 350,
            borderRadius: 15,
        }}>
           
            <Text style={{
                alignSelf: "center",
                fontSize: 30,
                color: "white",
                margin: 10
            }}>
                Create accont
            </Text>
            {
                        errmsg ? <Text style={{ color: "white",textAlign:"center" }}>{errmsg}</Text> : null
                    }
            <TextInput placeholder="Email"
                placeholderTextColor={"white"}
                onChangeText={(text)=>setldata({...ldata,email:text})}
                style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 20,
                    width: 250,
                    height: 50,
                    backgroundColor: "lightgrey",
                    margin: 10,
                    borderRadius: 10,
                }}
            />
            <TextInput placeholder="Password"
                placeholderTextColor={"white"}
                onChangeText={(text)=>setldata({...ldata,password:text})}
                style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 20,
                    width: 250,
                    height: 50,
                    backgroundColor: "lightgrey",
                    margin: 10,
                    borderRadius: 10,
                }}
            />
            <TextInput placeholder=" Confirm Password"
                placeholderTextColor={"white"}
                onChangeText={(text)=>setldata({...ldata,confirmpassword:text})}
                style={{
                    alignSelf: "center",
                    color: "black",
                    fontSize: 20,
                    width: 250,
                    height: 50,
                    backgroundColor: "lightgrey",
                    margin: 10,
                    borderRadius: 10,
                }}
            />
            <TouchableOpacity
            onPress={()=>{
                userregister();
            }}
            style={{
                alignSelf: "center",
                alignContent: "center",
                justifyContent: "center",
                width: 200,
                height: 50,
                backgroundColor: "lightgrey",
                margin: 10,
                borderRadius: 10,
            }}>
                <Text style={{
                    color: "red",
                    textAlign: "center",
                    fontSize: 20,
                }}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('login')
            }}>
                <Text style={{
                    textAlign:"center",
                    fontSize:20,
                    color:"white"
                }}>Login ?</Text>
            </TouchableOpacity>

        </View>

    </SafeAreaView>
    )
}