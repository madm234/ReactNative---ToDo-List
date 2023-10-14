import React,{useState} from "react";
import { StyleSheet,Text,View,FlatList,StatusBar} from "react-native";
import Header from './components/header';
import Card from './components/card';
import Input from './components/input'

export default function App(){
  const[naam,changeName] =useState([
    {name: 'Shower', key: '1'},
    {name: 'Breakfast', key: '2'},
    {name: 'Study', key: '3'},
    {name: 'Lunch', key: '4'},
    {name: 'Study', key: '5'},
    {name: 'PlayTime', key: '6'},
    {name: 'Dinner', key: '7'},
    {name: 'Study', key: '8'},
    {name: 'Sleep', key: '9'},
  ]);

  const addNew =(item)=>{
    changeName((prev)=>[
      {name: item, key: '10'},
      ...prev
    ])
  }

  const setHandler =(key)=>{ 
    changeName((prev)=>{
      return prev.filter(todo => todo.key!=key);
    })
  }

  return(
    <>
      <StatusBar barStyle='light-content' backgroundColor='#b13c31'/>
      <View style={styles.containe}>
        {/* Header */}
        <Header />

        {/* Adding more */}
        <Input addNew={addNew} />
        
        {/* Main */}
        <FlatList data={naam} renderItem={({item})=>(
          <Card item={item} setHandler={setHandler}/>
        )} />
      </View>
    </>
  )
}

const styles =StyleSheet.create({
  containe: {
    height: '100%',
    // backgroundColor: '#98E4FF'
  }
})