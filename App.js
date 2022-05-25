import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState()

  useEffect(async () => {
    const getData = async () => {
      try {
        const response = await fetch('https://my-first-firestore-sks.web.app/restaurants/')
        const data = await response.json()
        setAllRestaurants(data)
      } catch (err) {
        console.error(err)
      }
    }
    getData()
  }, [])
  

  return (
    <View style={styles.container}>
      {allRestaurants?.map((singleRestaurant) => (
        <Text key={singleRestaurant.id} >{singleRestaurant.name} </Text>
      ))}
      <Text>What's Good?!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
