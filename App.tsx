import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header/Header';
import MainSection from './src/components/MainSection/MainSection';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <MainSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343A40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
