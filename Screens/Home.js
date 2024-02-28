import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


function Home({navigation}){
    return(
        <View>
            <Text>Home Screen</Text>
            <Button
            title="Add an Item"
            onPress={()=>navigation.navigate('AddItem')}/>
            <Button
            title="List of Item"
            onPress={()=>navigation.navigate('List')}/>
        </View>
    )
}

export default Home;
