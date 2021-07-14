import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header, ScrollableList, PokemonDetail } from './components';

const POKEMON_API = `https://pokeapi.co/api/v2/`
const GET_50_POKEMON_PATH = `pokemon?limit=50`

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Pokemon List" // Name of the route
        children={({navigation}) => {
          return(
            <View style={styles.container}>
              <Header />
              <ScrollableList list={pokemonList} navigation={navigation}/>
            </View>
          )
        }}
        options={{title: 'Pokédex'}}
        />
        <Stack.Screen 
        name="Pokemon Detail"
        component={PokemonDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
});
