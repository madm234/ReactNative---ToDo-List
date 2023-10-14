import React,{useState} from "react";
import { StyleSheet,Text,View,FlatList,StatusBar,Alert} from "react-native";
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
  const[ind,incInd] =useState(11);

  const addNew =(item)=>{
    if(item.length>3){
      incInd(ind+1);
      changeName((prev)=>[
        {name: item, key: ind.toString()},
        ...prev
      ])
    }
    else{
      Alert.alert('OOPS!','Todo must be over 3 chars long.',[
        {text: 'Understood',onPress:()=> console.log('Pressed')}
      ])
    }
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