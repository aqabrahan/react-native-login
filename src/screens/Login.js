import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native';
//import { login } from '../api/mock';
//import { login } from '../api/authentication';
import EmailForm from '../forms/EmailForm';

import AuthContext from '../context';



const Login = ({ navigation }) => {
  const { signIn, errorLogin } = useContext(AuthContext);
  console.log('LOgiN --errorLogin')
  console.log(errorLogin)
  return (
    <EmailForm
      buttonText="Entrar"
      onSubmit={signIn}
      onAuthentication={() => navigation.navigate('Home')}
      error={errorLogin}
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
