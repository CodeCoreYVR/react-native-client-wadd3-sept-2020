import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Pokédex</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    backgroundColor: '#ee1515',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: '20%',
    borderBottomColor: '#222224',
    borderBottomWidth: 5,
  },
  h1: {
    fontSize: 40,
    color: '#FFCB05',
    textShadowColor: 'black',
    textShadowRadius: 10,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  }
});
