import react from "react";
import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Aboute from "../Components/restuarantdetail/About";
import AboutRestuarant from "../Components/restuarantdetail/aboutrestuarant";
import MenuItems from "../Components/restuarantdetail/menuitems";

export default function ResturantDetaile({route}){
    return(
        <SafeAreaView>
            <View style={{
                height:790
            }}>
            <AboutRestuarant route={route}/>
            <MenuItems  route={route} restuarantName={route.params.restuarantName}/>
            <View style={{top:-70,
              justifyContent:"center",
              alignSelf:"center",
            }}>
            <Aboute />
            </View>
            </View>
           
    </SafeAreaView>
    )
}