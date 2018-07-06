import React from 'react';
import { View, Button, Image } from 'react-native';

import firebase from '../Firebase'



export default class GalleryScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }
  //retrieve photos from database and show them in render
  // componentWillMount() {
  //   var storageRef = firebase.storage().refFromURL('gs://shazam-46ae2/images');
  //   storageRef.getDownloadURL().then(function(url) {
  //     console.log(url);
  //     this.setState({ images: url})
  //     console.log(images)
  // }, function(error){
  //     console.log(error);
  // });
  // }

render() {
  return (
    <View>
      {/* <Image source={{ uri: this.state.images }} style={{ width: 200, height: 200 }} /> */}
      <Button
        title="Click here to upload your photos"
        onPress={() => this.props.navigation.navigate('ImageUpload')}
      />
    </View>
  )
}
}


