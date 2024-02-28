import React,{useState} from "react";
import { Text,StyleSheet, View, TextInput, Button, Alert } from 'react-native'

import auth from '@react-native-firebase/auth'




export default function Login({navigation}){

    const [email,setEmail]=useState('')
    const [Password,setPassword]=useState('')


    const signup=()=>{
        
           if(email !='' && Password !=''){
            auth().createUserWithEmailAndPassword(email,Password).then((res)=>{
                console.log("response",res)
                Alert.alert("user Created Successfully, you can login now")
            })
       .catch((error)=>{

      console.log("error",error)
      Alert.alert(error.message)

       })

           }
           else{
            Alert.alert('Both Fields are mandatory')
           }
   
    }

    const login=()=>{
        auth().signInWithEmailAndPassword(email,Password).then((res)=>{
            console.log("response",res)
            navigation.navigate('Home');
        })
        .catch((error)=>{
            console.log("error",error)
        })

    }

    return(
        <View style={styles.container}>
<Text style={styles.title}>Login</Text>
<TextInput
style={styles.input}
value={email}
onChangeText={setEmail}
keyboardType="email-address"
placeholder="E-mail"
/> 
<TextInput
style={styles.input} 
value={Password}
onChangeText={setPassword}
placeholder="Password"
secureTextEntry={true}
/>
<View style={styles.button}>
    <Button
    onPress={signup}
    title="signup"/>
    <Button
    onPress={login}
    title="Login"
    />
</View>
        </View>
        
        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:21,
        marginBottom:20
    },
    input:{
        width:300,
        borderRadius:6,
        borderWidth:2,
        borderColor:'#6d69c3',
        marginVertical:10,
        padding:15
    },
    button:{
        width:150,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-around'
    }
})