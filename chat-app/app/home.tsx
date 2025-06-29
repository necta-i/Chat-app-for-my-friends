// app/home.tsx
import { StyleSheet, Text } from 'react-native';
import MessageModule from './components/messageModule'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('Lol')
  const handleText = (input: string)=>{
    if(input.length>0){
      setText(input)
    }
  }
  return (
      <SafeAreaView style={{flex:1, flexDirection:'column'}}>
        <Text style={{flex:8}}>{text}</Text>
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