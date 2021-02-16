import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Header from './src/components/Header/Header';
import MainSection from './src/components/MainSection/MainSection';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#495057' />
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
