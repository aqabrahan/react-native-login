import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={style.container}>
      <Text>About</Text>
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

export default About
