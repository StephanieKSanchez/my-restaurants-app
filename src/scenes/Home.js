import { useEffect, useState, useContext } from "react";
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import { SingleRestaurantContext } from "../../App";
import RestaurantCard from "../components/RestaurantCard";

export default function Home({ navigation }) {
    const [allRestaurants, setAllRestaurants] = useState();
    const { setCurrentRestaurant } = useContext(SingleRestaurantContext);

    useEffect(() =>{
        fetch('https://my-first-firestore-sks.web.app/restaurants/')
        .then(res => res.json())
        .then(setAllRestaurants)
        .catch(console.error)
    }, [])

    const handlePress = (singleRestaurant) => {
        setCurrentRestaurant(singleRestaurant);
        navigation.navigate('Details')
    }

    return (
        <ScrollView>
            {!allRestaurants
                ? <ActivityIndicator size='large' color='orange' />
                : allRestaurants.map(singleRestaurant => (
                    <TouchableOpacity key={singleRestaurant.id} 
                        onPress={() => handlePress(singleRestaurant)}>
                        <RestaurantCard   singleRestaurant={singleRestaurant} />
                    </TouchableOpacity>
                    
                ))
            }
        </ScrollView>

    )
}