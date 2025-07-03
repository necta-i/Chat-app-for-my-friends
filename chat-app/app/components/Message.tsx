import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Message({text, mine}:{text:string, mine:boolean}){
    return(
    <SafeAreaView style={mine? styles.bubbleMine:styles.bubbleTheirs}>
        <Text>
            {text}
        </Text>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    bubbleMine:{
        flex:1,
        flexDirection:'row',
        margin: 1,
        padding:5,
        borderRadius:10,
        backgroundColor: '#e3e3e3',
        alignSelf:'flex-end'
        },
    bubbleTheirs:{
        flex:1,
        flexDirection:'row',
        margin: 1,
        padding:5,
        borderRadius:10,
        backgroundColor: '#845aff',
        alignSelf:'flex-start'
        }
})