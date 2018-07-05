import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { AsyncStorage, View, Text } from "react-native"



export default class GlobalChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userGoogle: null,
            userName: null
        };
    }
    componentWillMount() {
        this.getUserName();
        
    }
    getUserName= async () => {
        try {
            userName = await AsyncStorage.getItem('userName') || 'none';
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        return this.setState({ userName: userName });
    }

    render() {
        return (
            <View>
                <Text>
                    Hi {this.state.userName}
                </Text>
            </View>
            //     <GiftedChat
            //         messages={this.state.messages}
            //     />
            // );
        )

    }
}
