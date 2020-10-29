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
    error,
  } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState(null);

  const submit = () => {
    onSubmit && onSubmit(email, password);
    /* onSubmit(email, password)
      .then(async (res) => {
        await setToken(res.token);
        onAuthentication();
      })
      .catch(err => {
        if (err) {
          setError(err.message);
        } else {
          setError('Something went wrong');
        }
      }); */
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.input}
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
  buttonText: PropTypes.string,
};

EmailForm.defaultProps = {
  buttonText: 'Enter',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default EmailForm;
