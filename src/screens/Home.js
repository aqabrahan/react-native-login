import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { getUsers } from '../api/user';
//import { getUsers } from '../api/mock';
//import { setToken } from '../api/token';
import { setToken } from '../api/token';

const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [hasLoadedUsers, setHasLoadedUsers] = useState(false);
  const [userLoadingErrorMessage, setUserLoadingErrorMessage] = useState(null);

  const loadUsers = () => {
    setHasLoadedUsers(false);
    setUserLoadingErrorMessage(null);
    console.log('###---loadUsers')
    getUsers()
      .then(({ users }) => {
        console.log('###---users')
        console.log(users)
        setHasLoadedUsers(true);
        setUsers(users);
      }
    )
    .catch(handleUserLoadingError);
  }

  const logout = async () => {
    console.log('### -- logout');
    setHasLoadedUsers(false);
    setUsers([]);
    await setToken('');
    navigation.navigate('Login');
  }

  const handleUserLoadingError = (res) => {
    console.log('#### -- res')
    console.log(res)
    if (res && [400, 401, 403].includes(res.error)) {
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