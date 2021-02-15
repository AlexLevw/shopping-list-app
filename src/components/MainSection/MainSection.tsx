import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function MainSection() {
  return (
    <View style={styles.container}>
      <Button title='+' onPress={() => console.log('click btn')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343A40'
  }
});