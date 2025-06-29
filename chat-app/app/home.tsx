// app/home.tsx
import { StyleSheet, View, FlatList } from 'react-native';
import MessageModule from './components/MessageModule';
import Message from './components/Message'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';

type MessageData = { id: string; info:string}
export default function Home() {
  const [data, setData] = useState<MessageData[]>([])
  const handleText = (input: string)=>{
    if(input.length>0){
      const newMessage = {
        id: Date.now().toString(),
        info: input
      }
      setData((prev)=>[...prev, newMessage])
    }
  }
  return (
      <SafeAreaView style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:8}}>
          <FlatList data={data} 
          renderItem={({item})=><Message text={item.info}/>}/>
        </View>
        <MessageModule onSubmit={handleText}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  temp:{
    backgroundColor:'grey',
    flexDirection: 'column'
  },
  container:{
    flexDirection: 'column',
    backgroundColor: 'green',
    flex:1
  },
  textBox1:{
    flex: 8,
    backgroundColor: 'red'
  },
  textBox2:{
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  buttonStyle:{
    flex: 1,
    backgroundColor: 'pink'
  },
  messageStyle:{
    flex: 4,
    fontWeight: 'bold',
    marginVertical:'auto',
    marginHorizontal:'auto',
    color:'white'
  }
})