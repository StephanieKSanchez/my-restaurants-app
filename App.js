import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView, View, ActivityIndicator, ImageBackground, ScrollView
} from 'react-native';
import RestaurantCard from './src/components/RestaurantCard';
import styles from './src/styles';

const bgImage = { uri: 'https://cdn.vox-cdn.com/thumbor/VLlJzyNRHfwWEzIN7oqT1Gvu7WU=/0x0:1280x853/920x690/filters:focal(538x325:742x529):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58260213/untitled_2451.100.jpeg' };

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    fetch('https://my-first-firestore-sks.web.app/restaurants/')
      .then(response => response.json())
      .then(setAllRestaurants)
      .catch(console.error)
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={bgImage} style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {!allRestaurants
              ? <ActivityIndicator size='large' color='orange' />
              :
              allRestaurants.map(singleRestaurant => (
                <RestaurantCard key={singleRestaurant.id} singleRestaurant={singleRestaurant} />
              ))
            }
          </ScrollView>
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
