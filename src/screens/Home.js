import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { getUsers } from '../api/mock';

const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [hasLoadedUsers, setHasLoadedUsers] = useState(false);
  const [userLoadingErrorMessage, setUserLoadingErrorMessage] = useState('');

  const loadUsers = () => {
    getUsers()
      .then((res) => {
        setHasLoadedUsers(true);
        setUsers(res.users);
      }
    )
    .catch(handleUserLoadingError);
  }

  const handleUserLoadingError = (err) => {
    if (res.error === 401) {
      navigation.navigate('Login');
    } else {
      setHasLoadedUsers(false);
      setUsers(res.users);
      setUserLoadingErrorMessage(res.message);
    }
  }

  useEffect(() => {
    loadUsers();
  }, [])
  return (
    <View>
      <Text>Home</Text>
      {users.length > 0 && users.map(user => (
        <Text key={user.email}>{user.email}</Text>
      ))}
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Home;