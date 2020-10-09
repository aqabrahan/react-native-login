import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { getUsers } from '../api/mock';
import { setToken } from '../api/token';

const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [hasLoadedUsers, setHasLoadedUsers] = useState(false);
  const [userLoadingErrorMessage, setUserLoadingErrorMessage] = useState(null);

  const loadUsers = () => {
    getUsers()
      .then((res) => {
        setHasLoadedUsers(true);
        setUsers(res.users);
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
    if (res.error === 401) {
      navigation.navigate('Login');
    } else {
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
    <View>
      <Text>Home</Text>
      {users.length > 0 && users.map(user => (
        <Text key={user.email}>{user.email}</Text>
      ))}
      {userLoadingErrorMessage
        &&
        <Text>{userLoadingErrorMessage}</Text>
      }
      <Button title="Log out" onPress={logout} />
    </View>
  )
}

export default Home;