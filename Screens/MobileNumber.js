import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function MobileNumber(props){

const[phoneNumber,setPhoneNumber]=useState(null)

    return(
        <View style={styles.container}>
<Text style={styles.text}> ENTER PHONE NUMBER</Text>

<TextInput
style={styles.input}
autoFocus
value={phoneNumber}
onChangeText={setPhoneNumber}/>
<Button title="sign in with OTP"
onPress={ ()=> props.onSubmit(phoneNumber)}/>

        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderWidth:2,
        borderColor:"lightblue",
        width:300,
        marginVertical:30,
        fontSize:25,
        padding:10,
        borderRadius:8
    },
    text:{
        fontSize:25
    }

})