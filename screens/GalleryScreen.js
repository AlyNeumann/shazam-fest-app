import React from 'react';
import { View, Button, Alert } from 'react-native';
import { ImagePicker } from 'expo';
import firebase from '../Firebase'

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if(!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
      .then(() => {
        Alert.alert("Success");
      })
      .catch((error) => {
        Alert.alert(error);
      })
    }
  }
  uploadImage  = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  }
  render() {
    return (
      <View>
        <Button
          title="Choose image..."
          onPress={this.onChooseImagePress}
        />
      </View>
    )
  }
}
