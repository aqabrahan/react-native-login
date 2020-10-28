import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { getUsers } from '../api/user';
import { setToken } from '../api/token';
import AuthContext from '../context';

const Home = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  console.log(signOut);
  /* const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasLoadedUsers, setHasLoadedUsers] = useState(false);
  const [userLoadingErrorMessage, setUserLoadingErrorMessage] = useState(null);
  console.log('-------Home')
  console.log(navigation)
  const loadUsers = () => {
    console.log('-------loadUsers')
    setHasLoadedUsers(false);
    setUserLoadingErrorMessage(null);
    getUsers()
      .then(({ users }) => {
        console.log('-------loadUsers OKOK')
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
    console.log('-------loadUsers ERROR')
    console.log(res)
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
    const didFocusSubscription = navigation.addListener('focus', () => {
      if (!hasLoadedUsers) {
        loadUsers();
      }
    })
    return () => {
      didFocusSubscription;
    }
  }, []) */
  return (
    <View>
      {/*<View style={styles.container}>
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
      </View>*/}
      <Text>Signed in----!</Text>
      <Button title="Sign out" onPress={signOut} />
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