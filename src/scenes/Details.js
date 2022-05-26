import { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { SingleRestaurantContext } from '../../App';
import styles from '../styles';

export default function Details() {
    const { currentRestaurant } = useContext(SingleRestaurantContext)
    return (
        <View style={styles.restaurantCard}>
            {!currentRestaurant
            ? <ActivityIndicator />
            : (
                <>
                <Image 
                source={{ uri: currentRestaurant.image}} 
                style={{ width: '100%', height: 240 }} />
                <Text style={styles.restaurantsName} >{currentRestaurant.name}</Text>
                <Text style={styles.cuisine} >{currentRestaurant.cuisine}</Text>
                <Text style={styles.address} >{currentRestaurant.address}</Text>
                <Text style={[styles.address, {fontWeight: '700'}]} >
                    Rating: {currentRestaurant.rating}
                </Text>
                </>
            )
        }
        </View>
    )
}