import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native';
import { createAccount } from '../api/mock';

const CreateAccount = ({navigation}) => {
  const createUser = () => {
    createAccount('test@test.ca', 'password1')
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => console.log('error:', err.message));
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Create Account</Text>
      <Button title="Create user" onPress={createUser} />
      <Button title="Log in" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

CreateAccount.propTypes = {

}

export default CreateAccount
