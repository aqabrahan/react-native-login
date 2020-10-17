import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Resume = () => {
  return (
    <View style={style.container}>
      <Text>Resume</Text>
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

export default Resume
