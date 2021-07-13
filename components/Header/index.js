import React from 'react' 
import { StyleSheet, View, Text } from 'react-native'

export default function Header(){
    return <View style={styles.header}><Text style={styles.h1}>Pokédex</Text></View>
}

const styles = StyleSheet.create({
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
})