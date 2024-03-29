import React, { useState } from "react";
import { StyleSheet,View,Text, Alert } from "react-native";

import auth from '@react-native-firebase/auth'
import VerifyCode from "./VerifyCode";
import MobileNumber from "./MobileNumber";

export default function MobileLogin({navigation}){

const [confirm,setConfirm]=useState(null);

const mobileLogin = async (phoneNumber)=>{
    console.log(phoneNumber)
    auth().signInWithPhoneNumber("+91"+phoneNumber).then((res)=>{
        console.log("response",res)
        setConfirm(res);

    })
.catch((error)=>{
    console.log("error",error)
});
}

const confirmVerification= async(code)=>{
    try {
await confirm.confirm(code);


    }
    catch(error){
        Alert.alert('invalid Code')

    }
}

auth().onAuthStateChanged((user)=>{
    if (user){
        setConfirm(null)
        navigation.navigate('Home')
    }else{
        if(confirm){
            Alert.alert('Authentication Failed')
        }
        
    }
})

if(confirm) return <VerifyCode onSubmit={confirmVerification}/>

return <MobileNumber onSubmit={mobileLogin} />

}