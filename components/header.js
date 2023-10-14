import React from 'react'
import { StyleSheet,Text,View} from "react-native";

export default function header(){
  return (
    <View style={styles.header}>
        <Text style={styles.txt}>ToDo List</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    header: {
        backgroundColor: '#E25E3E',
        paddingVertical: 20,
    },
    txt: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '700'
    }
})