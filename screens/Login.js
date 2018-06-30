import React from 'react'
import { View, Text, Button, Alert, Image } from 'react-native';
import * as firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyDOQ2I8qS3WjiAL7X4nVdgHHK49SyItHMM",
    authDomain: "shazam-46ae2.firebaseapp.com",
    databaseURL: "https://shazam-46ae2.firebaseio.com",
    projectId: "shazam-46ae2",
    storageBucket: "shazam-46ae2.appspot.com",
    messagingSenderId: "452468814819"
  });

export default class Login extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            userInfo: null,
            error: '',
            loading: false
        }
    }
    async logIn() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('463689234063252', {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
            const userInfo = await response.json();
            this.setState({ userInfo: userInfo });
            Alert.alert(
                'Logged in!',
                `Hi ${userInfo.name}!`,
            );
            const credential = firebase.auth.FacebookAuthProvider.credential(token);

            // Sign in with credential from the Facebook user.
            firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
                console.log(error+ "firebase auth faiiiilllll")
            });
        }
    }
    _renderUserInfo = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: this.state.userInfo.picture.data.url }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text style={{ fontSize: 20 }}>{this.state.userInfo.name}</Text>
                <Text>ID: {this.state.userInfo.id}</Text>
            </View>
        )
    }
    render() {
        return (
            <View>
                {!this.state.userInfo ? (<View><Button onPress={this.logIn.bind(this)} title='Login with Facebook to access chat and gallery!' /><Button
                    title="Skip login"
                    onPress={() => this.props.navigation.navigate('Home')}
                /></View>) : (this._renderUserInfo())}

            </View>)
    }
}