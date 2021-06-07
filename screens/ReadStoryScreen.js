import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={Styles.container}>
                <Text>Resd Story</Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#3d8dbb",
    }
})