import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { setToken } from '../api/token';


const EmailForm = props => {
  const {
    buttonText,
    onSubmit,
    children,
    onAuthentication,
  } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const submit = () => {
    console.log('go login');
    onSubmit(email, password)
      .then(async (res) => {
        console.log('####----res.token')
        console.log(res.token)
        await setToken(res.token);
        onAuthentication();
      })
      .catch(err => {
        console.log(err);
        if (err && err.error) {
          setError(err.error);
        }
        setError('Something went wrong.--');
      });
  }

  return (
    <ScrollView>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title={buttonText} onPress={submit} />
      {error &&
        <Text>{error}</Text>
      }
      {children}
    </ScrollView>
  )
}

EmailForm.propTypes = {

}

export default EmailForm
