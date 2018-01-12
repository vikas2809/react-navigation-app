import React,{ Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Header } from 'react-native-elements';

 
export default class HeaderDemo extends Component{
    render(){
        return(
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Section List', style: { color: '#fff' , fontSize: 25} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}