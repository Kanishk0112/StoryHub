import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {Header} from ' react-native-elements'
export default class WriteStoryScreen extends React.Component{
constructor(){
    super();
    this.state={
        text:""
    }
}
       render(){
        return(
            <View style={styles.container}>
            <Header
            backgroundColor="pink"
            centerComponent={{text:"StoryHub",style:{color:"black",fontSize:20}}}/>
            <TextInput style={styles.inputBox} 
            onChangeText={(text)=>{
                this.setState({text:text});
            }}
            value={this.state.text}/>
            <TouchableOpacity style={styles.Submitbutton}>
                <Text style={styles.Buttontext}>Submit</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#3d8dbb",
    },
    inputBox:{
        marginTop:260,
        width:"80%",
        alignSelf:"center",
        height:40,
        textAlign:"center",
        borderWidth:4,
        outLine:"none",
    },
    Submitbutton:{
        width:"50%",
        height:55,
        alignSelf:"center",
        padding:18,
        margin:10,
    },
    Buttontext:{
        textAlign:"center",
        fontSize:38,
        fontWeight:"bold"
    }

})