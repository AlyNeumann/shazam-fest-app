import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { AsyncStorage } from "react-native"
import Fire from '../Fire';



export default class GlobalChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userName: null
        };
    }
    componentWillMount() {
        this.getUserName();

    }
    getUserName = async () => {
        try {
            userName = await AsyncStorage.getItem('userName') || 'none';
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        return this.setState({ userName: userName });
    }
    get user() {
        return {
            name: this.state.userName,
            _id: Fire.shared.uid,
        };
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
            />
        );
    }

    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }
    componentWillUnmount() {
        Fire.shared.off();
    }
}

