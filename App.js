import React from 'react';
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
//import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://en.instagram-brand.com/wp-content/uploads/2016/11/Glyph-Icon-hero.png'}} style={styles.logo}/>
      <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below.</Text>
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
    width: 305, 
    height: 159, 
    marginBottom: 15
  },
  instructions: {
    color: '#888', 
    fontSize: 20, 
    textAlign: "center",
    marginHorizontal: 10 
  },
});
