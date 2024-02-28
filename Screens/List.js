import React, { useEffect,useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


import database from '@react-native-firebase/database'

let itemRef=database().ref('/Item');

function List(){

    const [itemArray,setItemArray]=useState([]);
    const [keys,setKeys]=useState([]);
    const [ifUpdate,setIfUpdate]=useState(false)
    const [UpdateText,setUpdateText]=useState([])
   const [updateIndex,setUpdateIndex] =useState(null)

    useEffect(()=>{
itemRef.on('value',snapshot=>{
    let data=snapshot.val();
    console.log(data)
    const items=Object.values(data);
    setKeys(Object.keys(data))
    console.log(keys)
    setItemArray(items);

})
    },[])

    const handleDelete=(index)=>{
        let childKey =keys[index]
        itemRef.child(childKey).remove();
    }

    const handleUpdate =(name,index)=>{
        setUpdateText(name)
        setUpdateIndex(index)
        setIfUpdate(true)
    }
  const submitUpdate=()=>{
    if (updateIndex !==null){
    let childKey=keys[updateIndex]
  itemRef.child(childKey).update({
    name:UpdateText
  })
  setIfUpdate(false)
  }
}

    return(
        <View style={styles.container}>
            {(itemArray.length>0)
            ? 
            ifUpdate 
                ?
                <View>
                <TextInput
                style={styles.input}
                value={UpdateText}
                onChangeText={setUpdateText}/>
                <Button
                title="Submit" onPress={ ()=> submitUpdate()}/>
                <Button
                title="Cancel" onPress={()=> setIfUpdate(false)}/>
                </View>
               :
               <View style={styles.list}>
               {itemArray.map((item,index)=>{
                   return(
                    <View  key={index}  style={styles.item}>
                       <Text style={styles.name}>{item.name}</Text>
                       <Button
                       title="Update" onPress={()=>handleUpdate(item.name,index)}/>
                       <Button
                       title="Delete"
                       onPress={()=>handleDelete(index)}/>
                       
                </View>
                   
                   )
               })}
               </View> 
            
           
        :<Text>NO ITEMS</Text>
        }
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#ebedeb'
    },
    itemText:{
        fontSize:24,
       fontWeight:'bold',
       textAlign:'center'
    },
    list:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        
       flexDirection:'row',
       justifyContent:'space-around',
       marginBottom:10,
       alignItems:'center'

    },
    name:{
        paddingEnd:10
    },
    input:{
        borderWidth:2,
        borderColor:'black'
    }
})

export default List;
