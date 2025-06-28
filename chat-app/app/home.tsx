// app/home.tsx
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textBox1}>
        <Text>Welcome to Expo!</Text>
      </View>
      <View style={styles.textBox2}>
        <Text style={styles.textStyle}> This is weird </Text>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    backgroundColor: 'green',
    flex:1
  },
  textBox1:{
    flex: 6,
    backgroundColor: 'red'
  },
  textBox2:{
    flex: 1,
    backgroundColor: 'blue',
  },
  textStyle:{
    fontWeight: 'bold',
    marginVertical:'auto',
    marginHorizontal:'auto',
    color:'white'
  }
})