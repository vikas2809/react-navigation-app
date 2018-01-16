import React, { Component } from 'react';
import{
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class HomeHeader extends Component{
    render(){
        return(
                <Text>Home Header</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        paddingRight: 15,
        paddingLeft: 15
    },
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 15
    }
});