import React, { Component } from 'react';
import {
    Text,
    View,
    AsyncStorage,
    StyleSheet
} from 'react-native';
import { Header } from 'react-native-elements';
import SectionListDemo from './SectionListDemo';
import HomeHeader from './HomeHeader';
import jwt_decode from "jwt-decode";
import { getUserDetail } from './networkCalls/Backend';
import { StackNavigator, NavigationActions } from 'react-navigation';


export default class Home extends Component{
    static navigationOptions ={
        header: null
    }
    state = {
        email: '',
        first_name: '',
        last_name: ''
     }
    constructor(props){
        super(props);
    }

     componentDidMount(){
         let that=this;
         AsyncStorage.getItem('token')
         .then((value)=>{     
             var decoded=jwt_decode(value);
             this.setState({
                 email: decoded.email,
             })
             this.getUserInfo(this.state.email);
            });
    }

    getUserInfo(email){
        getUserDetail(email).then((response)=>response.json()).then((responseData)=>{
            if(responseData.status===true){
                this.setState({
                    first_name: responseData.respData.firstName,
                    last_name: responseData.respData.lastName
                })
            }
            else
            {
                alert('Invalid User!!!');
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    goToHome(){
        console.log("Inside go to Home!!!");
        AsyncStorage.removeItem('token');
        AsyncStorage.getItem('token')
        .then((value)=>{     
            if(value)
                console.log('Please try again');
            else{
                alert('Success!!!');
            }
           });
       this.props.navigation.navigate('login');
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={homeStyle.container}>
                    <View style={homeStyle.headerStyle}> 
                    <Header 
                           leftComponent={{icon: 'menu', color: '#fff' }}
                            centerComponent={{ text: <Text>Welcome {this.state.first_name} {this.state.last_name} </Text> , style: {fontSize: 20,  color: '#fff' } }}
                           rightComponent={{ icon: 'home', color: '#fff',  onPress: this.goToHome }}
                            backgroundColor= '#FFC0C0'/>
                    </View>
                    <View style={homeStyle.sectionListDemo}>
                        <SectionListDemo />
                    </View>
                </View>
        )
    }
}

const homeStyle= StyleSheet.create({
    container: {
        flex:1
    }
})