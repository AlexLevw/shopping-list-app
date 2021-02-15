import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#495057' />
      <Text style={styles.title}>Shopping list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#495057',
    width: '100%',
  }, 
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  }
});

