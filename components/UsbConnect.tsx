import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/App';

type USBProps = NativeStackScreenProps<RootStackParamList,'UsbConnect'>
const UsbConnect = ({navigation}:USBProps) => {
  const [isConnected, setIsConnected] = useState(false);

  const onUSBConnected = () => {
    setIsConnected(true);
  };

  const onUSBDisconnected = () => {
    setIsConnected(false);
  };

  return (
    <View>
      <Text>Is USB connected? {isConnected ? 'Yes' : 'No'}</Text>
      <Button title="Connect" onPress={onUSBConnected} />
      <Button title="Disconnect" onPress={onUSBDisconnected} />
      <Button title="TcpConnect" onPress={()=>{navigation.push('TcpConnect')}}/>
      </View>
  );
};

export default UsbConnect;