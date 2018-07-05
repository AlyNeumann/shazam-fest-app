import React from 'react'
import { View, Text, Button, Alert, Image } from 'react-native';
// import * as firebase from 'firebase'
import Expo from 'expo';
import firebase from '../Firebase'
import { AsyncStorage } from "react-native"




export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            loading: false,
            userGoogle: null
        }
    }


    async signInWithGoogleAsync() {
        try {
            const result = await Expo.Google.logInAsync({
                // androidClientId: YOUR_CLIENT_ID_HERE,
                iosClientId: '452468814819-71t123irnhbhbv6gu3a4vcev19j2nbua.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                const userGoogle = result
                console.log(result)
                const token = result.accessToken
                this.setState({ userGoogle: userGoogle });
                console.log(this.state.userGoogle)
                Alert.alert(
                    'Logged in!',
                    `Hi ${userGoogle.user.name}!`, )
                const credential = firebase.auth.GoogleAuthProvider.credential(null, token);
                firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
                    console.log(error + "firebase auth faiiiilllll")
                });
                this.saveUserName();

                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }
    
    saveUserName = async userName => {
        try {
            userName = this.state.userGoogle.user.name;
            await AsyncStorage.setItem('userName', userName);
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    };

    _renderUserInfo = () => {

        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: this.state.userGoogle.user.photoUrl }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text style={{ fontSize: 20 }}>{this.state.userGoogle.user.name}</Text>
                <Button title='Continue'
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }


    render() {
        return (
            <View>
                {!this.state.userGoogle ? (<View><Button onPress={this.signInWithGoogleAsync.bind(this)} title='Sign in with Google' />
                </View>) : (this._renderUserInfo())}

            </View>)
    }
}