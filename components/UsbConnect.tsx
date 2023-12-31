import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const UsbConnect = () => {
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
    </View>
  );
};

export default UsbConnect;
