import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const Home2 = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text>Home 2</Text>
      <Button onPress={() => navigation.navigate('Profile')} title="go profile" />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home2
