import React from 'react';
import { ScrollView, StyleSheet, Button, Text } from 'react-native';
import { AsyncStorage } from "react-native"


export default class ChatScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userName: null
    }
  }
  static navigationOptions = {
    title: 'Chat',
  };
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
  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
        title="Shazam Chat"
        onPress={() => this.props.navigation.navigate('GlobalChat')}
        />
        <Text>Welcome {this.state.userName}</Text>
        <Text>This is a place to chat about ride shares, trades, and mustaches! Remember this is a family festival.</Text>
        {/* <Button
        title="Ride Share"
        onPress={() => this.props.navigation.navigate('RideShare')}
        />
        <Button
        title="Trade and Barter"
        onPress={() => this.props.navigation.navigate('Trade')}
        /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});