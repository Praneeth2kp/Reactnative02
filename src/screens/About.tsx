import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;

const About = ({navigation}: AboutProps) => {
  return (
    <View style={styles.container}>
      <Button title="Go to UsbConnect" onPress={() => navigation.push('UsbConnect')} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
