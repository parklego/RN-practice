import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
} from 'react-native';
import * as D from './src/data';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App(): React.JSX.Element {
  const avatarUrl = D.randomAvatarUrl();

  return (
    <SafeAreaView style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex, styles.imageBackground]}
        source={require('./src/assets/images/bg.jpg')}>
        <Image
          source={{
            uri: avatarUrl,
          }}
          style={[styles.image]}
        />
        <View>
          <Text style={[styles.text]}>some text here!!</Text>
          <Text style={[styles.text, styles.bold]}>some text here!!</Text>
          <Icon name="github-alt" size={32} color="white" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  imageBackground: {
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  bold: {
    fontFamily: 'DancingScript-Bold',
  },
});
