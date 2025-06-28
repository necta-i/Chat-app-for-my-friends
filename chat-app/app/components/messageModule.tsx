import { Text, StyleSheet, Pressable, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function messageModule(){
    return(
        <KeyboardAwareScrollView enableOnAndroid={true} enableAutomaticScroll={true}
        extraScrollHeight={50}>
        <View style={{flex:1, flexDirection:'row'}}>
            <TextInput style={{flex:5}}>Placeholder</TextInput>
            <Pressable style={style.button}>
                <Text style={style.text}>Send</Text>
            </Pressable>
        </View>
        </KeyboardAwareScrollView>
    );
}

const style = StyleSheet.create({
    button:{
        flex:1,
        backgroundColor:'dark-grey'
    },
    text:{
        color: 'white'
    }
})