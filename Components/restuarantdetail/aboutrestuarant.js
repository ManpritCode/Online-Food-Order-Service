import react from "react";
import { View, Text, Image } from "react-native";

const image = 'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg';

const title = "Farmhouse Kitchen Thai Cuisine";

const description = "Thai - Comfot Food - $$ - 4.5 - (2913+)";

export default function AboutRestuarant(props) {
    const {restaurant } = props.route.params;
    return (
        <View style={{
             height:300,
            margin: 10,
            borderRadius: 15,
            backgroundColor: "red",
        }}>
            <RestuarantImage image={restaurant.imageurl} />
            <View>
                <RestaurantTitle title={restaurant.restuarantname} />
                <ReastourantDescription description={restaurant.item1description} />
                <Restuarantlocation location={restaurant.location} />
            </View>
        </View>
    )
}

const RestuarantImage = (props) => (

    <Image source={{ uri: props.image }}
        style={{
            width: '95%',
            height: 180,
            flex: 1, resizeMode: "contain",
            borderRadius: 15,
            margin: 10,

        }}
    />
)
const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginHorizontal: 15,
        color: "white"
    }}>{props.title}</Text>
)
const ReastourantDescription = (props) => (
    <Text style={{
        color: "white",
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    }}
    >{props.description}</Text>

)
const Restuarantlocation = (props) => (
    <Text style={{
        color: "white",
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
        marginBottom: 10
    }}>{props.location}</Text>
)

