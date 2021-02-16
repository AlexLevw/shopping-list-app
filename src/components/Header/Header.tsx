import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#495057',
  }, 
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  }
});

