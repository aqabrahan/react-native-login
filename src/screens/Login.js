import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native';
//import { login } from '../api/mock';
import { login } from '../api/authentication';
import EmailForm from '../forms/EmailForm';

const Login = ({ navigation }) => {

  return (
    <EmailForm
      buttonText="Entrar"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </EmailForm>
  )
}

Login.propTypes = {

}

export default Login
