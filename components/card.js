import React from 'react'
import { StyleSheet,Text,View, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Card({item,setHandler}){
    return(
       <TouchableOpacity style={styles.btnStyle}>
            <MaterialIcons onPress={()=>setHandler(item.key)} style={styles.delBtn} name="delete" size={24} color="red" />
            <Text style={styles.btn}>{item.name}</Text>
       </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    btnStyle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn:{
        padding: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        width: '50%',
        textAlign: 'center',
        marginVertical: '7%',
        borderRadius: 10
    },
    delBtn: {
        paddingRight: 12
    }
})
