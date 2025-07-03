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

    const lineHeight = 20; // You can adjust this to match your text style -- I did help myself with some chatgpt code
    //note: the actual character max size is 18.8, I tried taking into account the spacing between the lines at 0.1
    //this works on my devices, a Motorola Edge 40 Neo
    const maxLines = 7; //the scrappy looking lines are all mine though
    const maxHeight = lineHeight * maxLines;
    
    const handleText = (input: string) =>{
        if(extraSize<280){
            setText(input)
        } else {
            //only allows deleting text after 10 lines of text
            if(input.length < text.length) setText(input)
        }
    }
    //resets the text input and the size constraints
    const handlePress = ()=>{
        onSubmit(text)
        setText('')
        setExtraSize(140)
    }
    //adds extra scroll space depending on the size of the message
    const handleContentSizeChange = (
        event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
    ) => {
        const { height } = event.nativeEvent.contentSize;
        if(height > maxHeight){
            setExtraSize(a=>a+20)
        }
    };
    return(
        <KeyboardAwareScrollView enableOnAndroid={true} enableAutomaticScroll={true}
        extraScrollHeight={extraSize}>
        <View style={style.textBubble}>
            <TextInput style={[{flex:5},
            {lineHeight},
            {backgroundColor:"#b1b1b1"},
            {borderRadius:25},
            {paddingHorizontal:10}
            ]} 
            multiline={true} 
            value={text}
            onChangeText={handleText}
            placeholder="Write a message"
            placeholderTextColor='white'
            onContentSizeChange={handleContentSizeChange}
            ></TextInput>
            <TouchableOpacity
            style={[style.button, { backgroundColor: pressed ? '#929292' : '#3500cf' }]}
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
    },
    textBubble:{
        flex:1,
        flexDirection: 'row',
        borderRadius: 20,
        color: '#b1b1b1'
    }
})