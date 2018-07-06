import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Button
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>Welcome to Shazamfest!!!!</Text>
        <Text>What would you like to do?</Text>
        <Button 
        title="Check out the Calender"
        onPress={() => this.props.navigation.navigate('Calender')}/>
        <Button 
        title="Upload photos to the Gallery"
        onPress={() => this.props.navigation.navigate('Gallery')}/>
        <Button 
        title="Chat!"
        onPress={() => this.props.navigation.navigate('Chat')}/>
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});
