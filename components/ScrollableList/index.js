import React from 'react' 
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableHighlight } from 'react-native'

export default function ScrollableList({list, navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {
                    list.map((pokemon, i) => (
                        <TouchableHighlight
                            onPress={() => navigation.navigate('Pokemon Detail', {pokemon})}
                            key={i}
                            style={styles.listItem}>
                                <Text style={styles.listItemText}>
                                    {pokemon.name}
                                </Text>
                        </TouchableHighlight>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
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
})