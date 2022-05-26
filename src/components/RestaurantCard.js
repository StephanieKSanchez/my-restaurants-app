
import { View, Text, Image } from 'react-native';
import styles from '../styles';


export default function RestaurantCard({ singleRestaurant }) {
  return (
    <View style={styles.restaurantCard}>
      <Text style={styles.restaurantsName}>
        {singleRestaurant.name}
      </Text>
      <Text style={styles.cuisine}>
        {singleRestaurant.cuisine}
      </Text>
      <Text style={styles.address}>
        {singleRestaurant.address}
      </Text>
      <Image source={{ uri: singleRestaurant.image }} style={{ width: '100%', height: 100 }} />
    </View>
  )
}