import React from 'react'
import { View, Text, Button } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Home;