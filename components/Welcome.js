import React, { Components, Component } from 'react';
import{
    View, StyleSheet,TouchableOpacity,Text, Image
} from 'react-native';
import HeaderDemo from './HeaderDemo';
import Login from './Login';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Movies from './Movies';

export default class Welcome extends Component{
    static navigationOptions={
        header: null
    };
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View style={welcomeStyle.container}>
                <View>
                    <HeaderDemo />
                </View>
                <View>
                    <Image 
                    style={welcomeStyle.welcomeImageStyle}
                    source ={require('./images/welcome2.png')} />
                    </View>
                <View style={welcomeStyle.setButtonStyle}>
                        <Button
                            containerViewStyle={{width: '40%', height: '50%', marginLeft: 10}}
                            style={welcomeStyle.loginButton}
                            {...this.props} 
                            onPress = {()=>navigate('login')}
                            fontSize = { 20 }
                            backgroundColor={this.props.backgroundColor|| '#5B9BF2' }
                            title='Login' />

                        <Button
                          containerViewStyle={{width: '40%', height: '50%',marginLeft:10}}
                            style={welcomeStyle.loginButton}
                            fontSize ={ 20 }
                            {...this.props} 
                            backgroundColor={this.props.backgroundColor|| '#3EA4F3' }
                            onPress={()=>navigate('sign_up')}
                            icon={{name: 'cached'}}
                            title='Signup' />
                    </View>
            </View>
        );
    }
}

const welcomeStyle=StyleSheet.create({
    container: {
        flex: 1,
    },
    setButtonStyle: {
        marginBottom: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    welcomeImageStyle: {
        height: '80%',
        width: '100%'
    }
})