import React from 'react'
import { View, TextInput, Button } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Login to Chat"/>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Chat')}
                />
            </View>)
    }
}