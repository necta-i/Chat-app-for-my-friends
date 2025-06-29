import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Message({text}:{text:string}){
    return(
    <SafeAreaView style={styles.bubble}>
        <Text>
            {text}
        </Text>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    bubble:{
        flex:1,
        margin: 1,
        padding:5,
        borderRadius:10,
        backgroundColor: '#e3e3e3',
        alignSelf:'flex-end'
        }
})