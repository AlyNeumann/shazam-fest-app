import React from 'react';
import { View, Button, Alert, Image } from 'react-native';
import { ImagePicker } from 'expo';
import Expo from 'expo';
import firebase from '../Firebase'
import { AsyncStorage } from "react-native"

async function register() {
  const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);
  if (status !== 'granted') {
    alert('Allow us to access your camera in order to upload your photos!');
  }
}

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      userName: null
    };

  }
  componentWillMount() {
    register();
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
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  }
  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.uploadImage(result.uri, `submited by ${userName}`)
        .then(() => {
          Alert.alert("Success");
        })
        .catch((error) => {
          Alert.alert(error);
        })
    }
  }
}