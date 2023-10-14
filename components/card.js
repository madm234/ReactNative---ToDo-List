import React from 'react'
import { StyleSheet,Text,View, TouchableOpacity} from "react-native";

export default function Card({item,setHandler}){
    return(
       <TouchableOpacity style={styles.btnStyle} onPress={()=>setHandler(item.key)}>
            <Text style={styles.btn}>{item.name}</Text>
       </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    btnStyle:{
        display: 'flex',
        alignItems: 'center'
    },
    btn:{
        padding: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        width: '50%',
        textAlign: 'center',
        marginVertical: '7%',
        borderRadius: 10
    }
})
