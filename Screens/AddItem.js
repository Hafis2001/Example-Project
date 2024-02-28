import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View ,TouchableHighlight, Alert} from "react-native";
import database from '@react-native-firebase/database'


let addItem=item=>{
    database().ref('/Item').push({
        name:item
    })
}
function AddItem(){
const [name,setName]=useState('')
const handlesubmit=()=>{
    addItem(name);
    setName('');
    Alert.alert('item saved successfully')
}

    return(
        <View style={styles.main}>
            <Text style={styles.title}>Add Item </Text>
            <TextInput
            style={styles.ItemInput}
           value={name}
            onChangeText={text=>setName(text)}/>

            
            <TouchableHighlight
            style={styles.button}
            onPress={handlesubmit}>
                <Text style={styles.buttonText}>Add</Text>

            </TouchableHighlight>
        </View>
    )
}


const styles=StyleSheet.create({
    main:{
        flex:1,
        padding:30,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#6565fc'

    },

    title:{
marginBottom:20,
fontSize:25,
textAlign:'center',
    },
    ItemInput:{
        height:50,
        padding:4,
        marginRight:5,
        fontSize:23,
        borderWidth:1,
        borderColor:'white',
        borderRadius:8,
        color:'white'

    },
    buttonText:{
fontSize:18,
color:'#111',
alignSelf:'center',

    },
    button:{
       height:45,
       flexDirection:'row',
       backgroundColor:'#fff',
       borderColor:'#fff',
       borderRadius:8,
       borderWidth:1,
       marginBottom:10,
       marginTop:10,
       alignSelf:'stretch',
       justifyContent:'center'

    }
})
export default AddItem;
