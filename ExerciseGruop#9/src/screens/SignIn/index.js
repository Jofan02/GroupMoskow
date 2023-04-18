import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignIn = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const data = {
      userName: userName,
      password: password,
    };

    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Selamat Datang</Text>
      <Gap height={30} />
      <TextInput
        label="Username"
        placeHolder="Masukan username anda"
        value={userName}
        onChangeText={e => setUsername(e)}
      />
      <Gap height={10} />
      <TextInput
        label="Password"
        placeHolder="Masukan password anda"
        value={password}
        secureTextEntry={true}
        onChangeText={e => setPassword(e)}
      />
      <Gap height={25} />
      <Button label="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  welcome: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
});