
import { StyleSheet, Text, View ,ScrollView} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from './Screens/Home';
import Restapi from './Components/restapi';
import ResturantDetaile from './Screens/restuarantdetaile';
import Signup from './Components/Login,signup/signup';
import Login from './Components/Login,signup/login';
import {Provider as ReduxProvider} from "react-redux";
import  configStore from "./Redux/store";
import AddressForm from './Components/useradress';


  const store =configStore()

export default function App() {
  const Stack = createNativeStackNavigator();
  const screenOptions ={
    headerShown:false,
}
  return (
    <ReduxProvider store={store}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName ='login' screenOptions={screenOptions}>
      <Stack.Screen name='HOME' component={Home}/>
      <Stack.Screen name='resturantdetaile' component={ResturantDetaile}/>
      <Stack.Screen name='restapi' component={Restapi}/>
      <Stack.Screen name='signup' component={Signup}/>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='addres' component={AddressForm}/>
    </Stack.Navigator>
  </NavigationContainer>
  </ReduxProvider>

  );
}

