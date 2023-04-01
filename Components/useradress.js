import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';




 export default function AddressForm({navigation}){

  const useraddress = (items) =>dispatch2({
      type:"userinformation",
       payload:items
     })

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');


 
  const dispatch2= useDispatch ();
  const handleSubmit = () => {
    
    const pickupAddress = {
      name,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
    };
    
    // You can do something with the pickupAddress data, like send it to a server or store it in a state.

    // Clear the form fields
    setName('');
    setPhoneNumber('');
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
    console.log(pickupAddress)
   useraddress(pickupAddress);
  };
  
 // 
 
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor:"blue",
        height:45,
        justifyContent:"center",
        alignItems:"center",
      
      
        padding:10,
        
      }}>
        <Text style={{
          fontSize:22,
          color:"white"

        }}>Add Address</Text>
      </View>
    <View style={styles.container}>
      
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        required
      />
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        required
      />
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
        required
      />
      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter your city"
        required
      />
      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={setState}
        placeholder="Enter your state"
        required
      />
      <Text style={styles.label}>Zip Code:</Text>
      <TextInput
        style={styles.input}
        value={zipCode}
        onChangeText={setZipCode}
        placeholder="Enter your zip code"
        required
      />
      <TouchableOpacity style={styles.button} onPress={()=>{
        handleSubmit();
        navigation.navigate('HOME')
      }} 
      

      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    padding: 10,
    height:40
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});


