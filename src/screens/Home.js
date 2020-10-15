import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { getUsers } from '../api/user';
//import { getUsers } from '../api/mock';
//import { setToken } from '../api/token';
import { setToken } from '../api/token';

const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasLoadedUsers, setHasLoadedUsers] = useState(false);
  const [userLoadingErrorMessage, setUserLoadingErrorMessage] = useState(null);

  const loadUsers = () => {
    setHasLoadedUsers(false);
    setUserLoadingErrorMessage(null);
    getUsers()
      .then(({ users }) => {
        setLoading(false);
        setHasLoadedUsers(true);
        setUsers(users);
      }
    )
    .catch(handleUserLoadingError);
  }

  const logout = async () => {
    setHasLoadedUsers(false);
    setUsers([]);
    await setToken('');
    navigation.navigate('Login');
  }

  const handleUserLoadingError = (res) => {
    if (res && [400, 401, 403].includes(res.error)) {
      navigation.navigate('Login');
    } else {
      setLoading(false);
      setHasLoadedUsers(false);
      setUsers(res.users);
      setUserLoadingErrorMessage(res.message);
    }
  }

  useEffect(() => {
    const didFocusSubscription = navigation.addListener('didFocus', () => {
      if (!hasLoadedUsers) {
        loadUsers();
      }
    })
    return () => {
      didFocusSubscription.remove();
    }
  }, [])
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {!loading && <Text>Home</Text>}
      {users.length > 0 && users.map(user => (
        <Text key={user.email}>{user.email}</Text>
      ))}
      {userLoadingErrorMessage
        &&
        <Text>{userLoadingErrorMessage}</Text>
      }
      {!loading && <Button title="Log out" onPress={logout} />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;