import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import FirstComponents from './components/FirstComponents';

import SecondComponent from './components/SecondComponent';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Hola mundo</Text>
      <FirstComponents />
      <SecondComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
