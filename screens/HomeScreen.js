import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  Button,
  View,
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
        <Text>In the tab bar below you will find the calender, photo gallery, and chat room!</Text>
          <Button
            title="Forgot to login?"
            onPress={() => this.props.navigation.navigate('Login')}
          />

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
