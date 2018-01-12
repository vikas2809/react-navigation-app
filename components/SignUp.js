import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { postUser, getUser } from './networkCalls/Backend';
import * as CryptoJS from 'crypto-js';
const t = require('tcomb-form-native');

const Form = t.form.Form

const newUser = t.struct({
  first_name: t.String,
  last_name: t.String,
  email: t.String,
  password:  t.String
})

const options = {
    fields: {
        first_name: {
            placeholder: 'Enter your first name',
            autoCapitalize: 'none',
            autoCorrect: false
        },
        last_name: {
            placeholder: 'Enter your last name',
            autoCapitalize: 'none',
            autoCorrect: false
        },
      email: {
        placeholder: 'Enter your email',
        autoCapitalize: 'none',
        autoCorrect: false
      },
      password: {
        placeholder: 'Enter your password',
        autoCapitalize: 'none',
        password: true,
        autoCorrect: false
      }
    }
  }

import {FormLabel, FormInput } from 'react-native-elements';
export default class SignUp extends Component{
    static navigationOptions={
        title: "SignUp"
    };
    constructor(props)
    {
        super(props)
    this.state = {
      value: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
    }
    componentWillUnmount() {
        this.setState = {
          value: {
            first_name: '',
            last_name: '',
            email: '',
            password: null
          }
        }
      }
      _handleAdd = () => {
        const value = this.refs.form.getValue();
        // If the form is valid...
        if (value) {
          var key = CryptoJS.enc.Base64.parse("#base64Key#");
          var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
          var encrypted = CryptoJS.AES.encrypt(value.password,key,{iv: iv});
          var password=encrypted.toString();
          console.log(password);
          postUser(value.first_name,value.last_name,value.email,password)
          .then((response)=>response.json())
          .then((responseData)=>{
            console.log("Response: ",responseData);
            if(responseData.success===true)
            {
              alert("Registered Successfully!!!")
            }
            if(responseData.success===false)
            {
              alert(responseData.message);
            }
          }).catch((err)=>{
            console.log(err);
          }).done();       
         }
          if(!value)
          {
              alert("Please Enter Correct Value");
          }
    }
    render(){
        return(
            <ScrollView style={styles.container}>
        <Form
          ref='form'
          type={newUser}
          options={options}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableOpacity onPress={this._handleAdd}>
          <Text style={[styles.button, styles.greenButton]}>Create account</Text>
        </TouchableOpacity>
      </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      flexDirection: 'column'
    },
    button: {
      borderRadius: 4,
      padding: 20,
      textAlign: 'center',
      marginBottom: 20,
      color: '#fff'
    },
    greenButton: {
      backgroundColor: '#4CD964'
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  })