// app/home.tsx
import { StyleSheet, View, FlatList } from 'react-native';
import MessageModule from './components/MessageModule';
import Message from './components/Message'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useRef, useEffect } from 'react';

type MessageData = { id: string; info:string}
export default function Home() {
  //holding data in a list for displaying in the FlatList element
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
  //ensuring autoscroll to last element
  const flRef = useRef<FlatList<MessageData>>(null)
  useEffect (
    () => {
      if(data.length>0)
      flRef.current?.scrollToEnd({animated:true})
  }, [data])
  return (
      <SafeAreaView style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:8}}>
          <FlatList 
          ref={flRef}
          data={data} 
          renderItem={({item})=><Message text={item.info} mine={false}/>}
          />
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