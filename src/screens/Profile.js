import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text>Profile</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open Menu" />
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

export default Profile
