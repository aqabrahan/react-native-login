import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const ResetPassword = () => {
  return (
    <View style={style.container}>
      <Text>ResetPassword</Text>
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

export default ResetPassword
