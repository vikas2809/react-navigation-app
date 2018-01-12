import React, { Component } from 'react';
import{
    Text,
    View,
    StyleSheet
} from 'react-native';
import { 
    Container,
    Header,
    Content,
    Left,
    Right,
    Body,
    Title,
    Icon
} from 'native-base';

export default class HomeHeader extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name='arrow-back' />
                    </Left>
                    <Body>
                        <Title>Seminars</Title>
                    </Body>
                    <Right>
                        <Icon name='menu' />
                    </Right>
                </Header>
                <Content contentContainerStyle={styles.content} >
                    <Text>Content Here</Text>
                </Content>
            </Container>
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