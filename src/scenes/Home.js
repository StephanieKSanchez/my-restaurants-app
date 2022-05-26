import { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import RestaurantCard from "../components/RestaurantCard";

export default function Home({ navigation }) {
    const [allRestaurants, setAllRestaurants] = useState();

    useEffect(() =>{
        fetch('https://my-first-firestore-sks.web.app/restaurants/')
        .then(res => res.json())
        .then(setAllRestaurants)
        .catch(console.error)
    }, [])

    return (
        <ScrollView>
            {!allRestaurants
                ? <ActivityIndicator size='large' color='orange' />
                : allRestaurants.map(singleRestaurant => (
                    <TouchableOpacity key={singleRestaurant.id} 
                        onPress={() => navigation.navigate('Details')}>
                        <RestaurantCard   singleRestaurant={singleRestaurant} />
                    </TouchableOpacity>
                    
                ))
            }
        </ScrollView>

    )
}