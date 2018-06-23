import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation';
import Friday from './Friday';
// import Saturday from './Saturday';
// import Sunday from './Sunday';

export default class ChatScreen extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: 'Chat',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
        title="Shazam Chat"
        onPress={() => this.props.navigation.navigate('GlobalChat')}
        />
        <Button
        title="Ride Share"
        onPress={() => this.props.navigation.navigate('RideShare')}
        />
        <Button
        title="Trade and Barter"
        onPress={() => this.props.navigation.navigate('Trade')}
        />
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