import { Text, StyleSheet, TouchableOpacity, TextInput, View, NativeSyntheticEvent, TextInputContentSizeChangeEventData } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, {useState} from 'react';

type MessageModuleProps = {
  onSubmit: (message: string) => void;
};

export default function MessageModule({onSubmit}:MessageModuleProps){
    const [pressed, setPressed] = useState(false);
    const [extraSize, setExtraSize] = useState(140);
    const [text, setText] = useState('');

    const lineHeight = 20; // You can adjust this to match your text style
    const maxLines = 6;
    const maxHeight = lineHeight * maxLines;
    
    const handleText = (input: string) =>{
        if(extraSize<280){
            setText(input)
        } else {
            if(input.length < text.length) setText(input)
        }
    }
    const handlePress = ()=>{
        onSubmit(text)
        setText('')
        setExtraSize(140)
    }
    const handleContentSizeChange = (
        event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
    ) => {
        const { height } = event.nativeEvent.contentSize;
        if(height >= maxHeight){
            setExtraSize(a=>a+20)
        }
    };
    return(
        <KeyboardAwareScrollView enableOnAndroid={true} enableAutomaticScroll={true}
        extraScrollHeight={extraSize}>
        <View style={{flex:1, flexDirection:'row'}}>
            <TextInput style={[{flex:5},{lineHeight}]} 
            multiline={true} 
            value={text}
            onChangeText={handleText}
            placeholder="Write a message"
            onContentSizeChange={handleContentSizeChange}
            ></TextInput>
            <TouchableOpacity
            style={[style.button, { backgroundColor: pressed ? '#929292' : '#b1b1b1' }]}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={handlePress}
            >
                <Text style={style.text}>Send</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
    );
}

const style = StyleSheet.create({
    button:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25
    },
    text:{
        color: 'white'
    }
})