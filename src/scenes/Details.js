import { useContext, useState } from 'react';
import { View, Text, Image, Button, ActivityIndicator } from 'react-native';
import { SingleRestaurantContext } from '../../App';
import styles from '../styles';

export default function Details() {
    const [isRated, setIsRated] = useState(false);
    const { currentRestaurant, setCurrentRestaurant, ratingsUpdated, setRatingsUpdated } = useContext(SingleRestaurantContext)

    const handleRating = (newRating) => {
        setIsRated(true);
        setRatingsUpdated(ratingsUpdated + 1);
        fetch(`https://my-first-firestore-sks.web.app/restaurants/${currentRestaurant.id}/rating`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating: newRating }),
        })
        .then(res => res.json())
        .then(data => setCurrentRestaurant(data))
        .catch(console.error)
    }

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
                    Rating: {currentRestaurant.rating.toFixed(2)}
                </Text>
                {!isRated &&
              <>
                <Text style={styles.address}>My Rating:</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',
                  paddingVertical: 24,
                }}>
                  <Button onPress={() => handleRating(1)} title="⭐️" />
                  <Button onPress={() => handleRating(2)} title="⭐️" />
                  <Button onPress={() => handleRating(3)} title="⭐️" />
                  <Button onPress={() => handleRating(4)} title="⭐️" />
                  <Button onPress={() => handleRating(5)} title="⭐️" />
                </View>
              </>
            }
          </>
        )
      }
}