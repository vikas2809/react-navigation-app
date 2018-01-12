import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class LoginLogo extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}>Welcome to the SectionList</Text>
                <Image style={styles.logo}
                    	source={require('./images/logo.jpg')}
                />
                </View>
        );
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    text:{
        marginTop:'5%',
        color: '#000000',
        fontSize:15
    },
    logo:{
        marginTop:'10%',
        height:100,
        width:100
    }
})