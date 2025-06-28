// app/home.tsx
import { StyleSheet, View, Text, TextInput, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MessageModule from './components/messageModule'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
      <SafeAreaView style={{flex:1, flexDirection:'column'}}>
        <Text style={{flex:5}}>Lol</Text>
        <MessageModule/>
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