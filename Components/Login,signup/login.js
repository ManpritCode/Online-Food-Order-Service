import react, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch ,useSelector} from "react-redux";
import axios from "axios";


export default function Login({ navigation }) {
    const [pdata, setpdata] = useState({
        email: '',
        password: '',
        confirmpassword: ''
    })
    const [errmsg, seterrmsg] = useState(null)
   // const{customerid} = useSelector((state)=>state.cartReducer1.selectid)
   //   console.log("customer id ",customerid)

    const loginuser = () => {
        if (pdata.email == '' ||
            pdata.password == ''

        ) {

            seterrmsg("Fill the data")
            console.log("fill the data")
        }

        else {
            fetch('http://192.168.1.3:3000/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pdata)
            }).then(res => res.json()).then(
                data => {
                    if (data.error) {
                        console.log("error")
                        seterrmsg("Wrong Crendtional")
                    } else {
                        alert('login succesfully')
                        navigation.navigate('HOME')
                    }
                }
            )


        }
        
    }
     
const [userdata, setuserdata] = useState([])
useEffect(() => {
    axios.get('http://192.168.1.3:3000/userdata')
        .then(response => {
            setuserdata(response.data) 
        })   
},);
   

const [userid,setuserid]=useState({
    id:'',
})
const dispatch = useDispatch();
  const allprocess = ()=>{
        console.log("cliked")
        console.log(pdata.email)
       console.log(userdata)
       const k = pdata.email
       console.log(k)
       const user = userdata.data.find(u => u.email === k);
        console.log(user._id)
        const iduser= user._id
        setuserid({...userid,id:iduser})  
        selectid(iduser);
     }
     const selectid = (item) =>dispatch({
        type: "addid", 
        payload:item,
 })



    return (<SafeAreaView style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flex: 1
    }}>
        <View style={{
            backgroundColor: "red",
            height: 320,
            width: 350,
            borderRadius: 15,
        }}>
            <Text style={{
                alignSelf: "center",
                fontSize: 30,
                color: "white",
                margin: 10
            }}>
                LOGIN
            </Text>
            {
                errmsg ? <Text style={{ color: "white", textAlign: "center" }}>{errmsg}</Text> : null
            }
            <TextInput placeholder="Email"
                onPressIn={() => { seterrmsg(null) }}
                onChangeText={(text) => setpdata({ ...pdata, email: text })}
                placeholderTextColor={"white"}
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
                onPressIn={() => { seterrmsg(null) }}
                onChangeText={(text) => setpdata({ ...pdata, password: text })
                
            }
                placeholderTextColor={"white"}
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

            <TouchableOpacity
                onPress={() => {
                    loginuser();
                    
                
                    
                    
                    allprocess();

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
            <TouchableOpacity onPress={() => {
                navigation.navigate('signup')

            }}>
                <Text style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 20
                }}>Create accunt ?
                </Text>
            </TouchableOpacity>

        </View>

    </SafeAreaView>
    )
}