import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.squareContainer}>
        <View style={styles.square1}>
          <Text style={styles.text}>Square 1</Text>
        </View>
        <View style={styles.square2}>
          <Text style={styles.text}>Square 2</Text>
        </View>
        <View style={styles.square3}>
          <Text style={styles.text}>Square 3</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 30,
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  square1: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(187,246,255,0.8)',
  },
  square2: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(54,255,148,0.8)',
  },
  square3: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(255,63,63,0.8)',
  },
  text: {
    textAlign: 'center',
    lineHeight: 70,
    fontSize: 12
  }
})

export default App;