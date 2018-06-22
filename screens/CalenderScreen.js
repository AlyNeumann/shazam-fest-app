import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation';
import Friday from './Friday';
// import Saturday from './Saturday';
// import Sunday from './Sunday';

export default class CalenderScreen extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: 'Calender',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
        title="Friday"
        onPress={() => this.props.navigation.navigate('Friday')}
        />
        <Button
        title="Saturday"
        onPress={() => this.props.navigation.navigate('Saturday')}
        />
        <Button
        title="Sunday"
        onPress={() => this.props.navigation.navigate('Sunday')}
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
