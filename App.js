import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components';

const POKEMON_API = `https://pokeapi.co/api/v2/`
const GET_50_POKEMON_PATH = `pokemon?limit=50`

export default function App() {
  const [pokemonList, setPokemonList] = useState([])
  // grab list of pokemon and set the state to the list
  useEffect(() => {
    fetch(`${POKEMON_API}${GET_50_POKEMON_PATH}`)
    .then(res => res.json())
    .then(payload => {
      setPokemonList(payload.results)
    })
    .catch(e => console.log(e))
  }, [])
  console.log(pokemonList)
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.pokemonList}>
        {
          pokemonList.map(pokemon => <View style={styles.listItem}><Text style={styles.listItemText}>{pokemon.name}</Text></View>)
        }
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
    flexDirection: 'column',
  },
  pokemonList: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  listItem: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  listItemText: {
    fontSize: 20,
  }
});
