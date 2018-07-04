import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat';



export default class GlobalChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userGoogle: null
        };
    }

    // componentWillReceiveProps() {
    //     this.setState({
    //       userGoogle: //pull this from asyncstorage
    //     });
    // }
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                // onSend={(message) => {
                //     Backend.sendMessage(message);
                // }}
                // user={{
                //     _id: this.state.userInfo.id,
                //     name: this.state.userInfo.name,
                // }}
            />
        );
    }
    // componentDidMount() {
    //     Backend.loadMessages((message) => {
    //         this.setState((previousState) => {
    //             return {
    //                 messages: GiftedChat.append(previousState.messages, message),
    //             };
    //         });
    //     });
    // }
    // componentWillUnmount() {
    //     Backend.closeChat();
    // }
 
}
