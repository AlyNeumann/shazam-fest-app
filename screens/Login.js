import React from 'react'
import { View, TextInput, Button } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Enter your username..."/>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>)
    }
}