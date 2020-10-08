import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native';
import { login } from '../api/mock';

const Login = ({ navigation }) => {
  const [error, setError] = useState(null);
  const loginUser = () => {
    login('test@test.ca', 'password', false)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => {
        setError(err.message);
      });
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Log in"
        onPress={loginUser}
      />
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
      {error && <Text>{error}</Text>}
    </View>
  )
}

Login.propTypes = {

}

export default Login
