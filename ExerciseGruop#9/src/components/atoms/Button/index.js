import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});