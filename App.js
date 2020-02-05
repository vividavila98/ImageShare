import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import logo from './assets/ImageShare.png';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  // hooks
  let [selectedImage, setSelectedImage] = React.useState(null);

  // using expo-image-picker library, async request!
  let openImagePickerAsync = async () => {
    let permissionResult = 
    await ImagePicker.requestCameraRollPermissionsAsync();
    
    if(permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    //console.log(pickerResult);

    if(pickerResult.cancelled) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };

  if(selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }} 
          style={styles.thumbnail}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, 
        just press the button below!
      </Text>
      {/* Button pressed to pick picture */}
      <TouchableOpacity 
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250, 
    height: 250, 
  },
  instructions: {
    color: '#888', 
    fontSize: 20, 
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 15
  },
  button: {
    backgroundColor: '#1647fb',
    padding: 17,
    borderRadius: 6
  },
  buttonText: { 
    fontSize: 20, 
    color: '#fff' 
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
});
