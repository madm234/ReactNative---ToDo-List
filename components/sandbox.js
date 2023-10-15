import React from 'react';
import {StyleSheet,Text,View} from 'react-native'

export default function Sandbox(){
  return (
    <>
    <View style={styles.paren}>
        <View style={styles.container}>
        </View>
        <View style={styles.container2}>
        
        </View>
    </View>
    </>
  )
}

const styles =StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 28,
        backgroundColor: 'red',
    },
    container2: {
        flex:1,
        backgroundColor: 'yellow',
    },
    paren: {
        display: 'flex',
        flexDirection: 'row'
    }
})