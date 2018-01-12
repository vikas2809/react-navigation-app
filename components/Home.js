import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import SectionListDemo from './SectionListDemo';
import HomeHeader from './HomeHeader';

export default class Home extends Component{
    static navigationOptions ={
        header: null
    }
    render(){
        return(
            <View style={homeStyle.container}>
                <HomeHeader />
                   <SectionListDemo />
                </View>
        )
    }
}

const homeStyle= StyleSheet.create({
    container: {
        flex:1
    }
})