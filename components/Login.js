import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
    Button
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import LoginLogo from './LoginLogo';
import Home from './Home';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import * as CryptoJS from 'crypto-js';
import { authenticateUser } from './networkCalls/Backend';
    
export default class Login extends Component{
    static navigationOptions={
        title: "Login"
    };
    constructor(props)
    {
        super(props);
    }
    state ={
        email: '',
        password: ''
    }
    handleEmail = (text) =>{
        this.setState({email: text})
    }
    handlePassword = (text) =>{
        this.setState({password: text})
    }

    login = (email, pass) =>{
        if(email===''&&pass==='')
            alert('invalid user');
        if(email!==''&&pass!=='')
        {
            console.log(email+''+pass);
            var key = CryptoJS.enc.Base64.parse("#base64Key#");
            var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
            var encrypted = CryptoJS.AES.encrypt(pass,key,{iv: iv});
            var password=encrypted.toString();
            console.log(password);
            console.log(email);
            authenticateUser(email,password)
            .then((response)=>response.json())
            .then((responseData)=>{
                console.log(responseData);
                if(responseData.success===false)
                    alert(responseData.message);
                if(responseData.success===true)
                {
                    alert('Welcome!!! Valid User');
                    AsyncStorage.setItem('token',responseData.token);
                    console.log('token',typeof responseData.token);
                    // const resetAction=NavigationActions.reset({
                    //         index: 0,
                    //         actions: [
                    //             NavigationActions.navigate({routeName: 'home'})
                    //         ],
                    //     })
                          this.props.navigation.navigate('home');
                }
                    
            }).catch((error)=>{
                console.log(error);
            }).done();

            // alert("Valid User");
            // const resetAction=NavigationActions.reset({
            //     index: 0,
            //     actions: [
            //         NavigationActions.navigate({routeName: 'home'})
            //     ],
            // })
          //  this.props.navigation.dispatch(resetAction);
            // this.props.navigation.navigate('home');
        }
        else
        alert('Please Enter Correct Value');
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={loginStyle.container}>
                <View style={loginStyle.logoContainer}>
                    <LoginLogo />
                </View>
                <View style={loginStyle.loginContainer}>
                    <TextInput
                    style={loginStyle.input}
                    underlineColorAndroid= "transparent"
                    placeholder="email"
                    autoCapitalize="none"
                    placeholderTextColor="#9a73ef"
                    onChangeText={this.handleEmail}
                    />

                  <TextInput
                    style={loginStyle.input}
                    underlineColorAndroid= "transparent"
                    placeholder="password"
                    autoCapitalize="none"
                    secureTextEntry
                    placeholderTextColor="#9a73ef"
                    onChangeText={this.handlePassword}
                    />
                    <TouchableOpacity
                        style = {loginStyle.submitButton}
                        onPress = {()=>this.login(this.state.email, this.state.password)}>
                        <Text style = {loginStyle.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const loginStyle=StyleSheet.create({
    container: {
        flex:1,
        padding: 10
    },
    logoContainer:{
         flex:1
    },
    loginContainer:{
        marginTop: '60%'
        // flex:1
    },
    input:{
        margin: 15,
        height: 50,
        borderColor: '#E5CBCB',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#D8B6B6',
        padding: 10,
        margin: 15,
        height: 50,
        alignItems: 'center'
     },
     submitButtonText:{
        color: 'white'
    
     }
})