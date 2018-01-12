import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    SectionList
} from 'react-native';
import {List,ListItem,SearchBar, Header} from 'react-native-elements';

export default class SectionListDemo extends Component{

    // constructor(props)
    // {
    //     super(props);
    //     this.state={
    //         contacts: [
               
    //     }
    // }

    render(){
        return(
            <View>
            <SectionList 
            renderItem={({item})=> <Text style={styles.itemStyle}>{item} </Text>}
            renderSectionHeader={({section}) => <Text style={styles.titleStyle}>{section.title}</Text>}
            sections= {[
                {data: ['Daisy'], title: 'D'},
                {data: ['John','Jack'], title: 'J'},
                {data: ['Mary','Milly'], title: 'M'},
                {data: ['Smith','Steve','Spyder'], title: 'S'},
                {data: ['Zack'], title: 'Z'},
            ]}
            />
            </View>
        );  
    }
}

const styles=StyleSheet.create({
    container:{
        flex:0.1,
        marginTop:'75%'
    },
    itemStyle:{
      fontSize:15
    },
    titleStyle:{
        fontSize:25
    }
})