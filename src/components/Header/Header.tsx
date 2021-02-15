import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <StatusBar
      style='auto'
      backgroundColor='#102027' />
      <Text>Shopping list:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  }, 
  satusBar: {
    flex: 1  
  }
});

