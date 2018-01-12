import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';


export const Nav= StackNavigator({
    welcome: { screen: Welcome },
    login: { screen: Login },
    sign_up: { screen: SignUp }, 
    home: { screen : Home }
})