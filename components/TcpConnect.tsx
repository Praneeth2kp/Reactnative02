import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

import TcpSocket from 'react-native-tcp-socket';

import {RootStackParamList} from '../src/App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type TcpConnectProps = NativeStackScreenProps<RootStackParamList, 'TcpConnect'>;

const TcpConnect = ({navigation}: TcpConnectProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState('');
  const options = {
    port: 1000,
    host: '10.200.104.90',
  };
  const connectToServer = () => {
    const newsocket = TcpSocket.createConnection(options, () => {
      console.log('Connected');
      setIsConnected(true);
    });
    newsocket.on('data',recievedData=>{
        console.log(`Recieved Data:${recievedData}`)
        setData(recievedData.toString());
    })
    newsocket.on('close', () => {
      console.log('Closed connection');
      setIsConnected(false);
    });
    newsocket.on('error', error => {
      console.log(`Error ${error}`);
      setIsConnected(false);
    });
  };
  

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.statusText}>
         TCP/IP Connection: {isConnected ? 'Connected' : 'Disconnected'}
        </Text>
        {isConnected ? (
          <Button title="DisConnect to server" onPress={connectToServer} />
        ) : (
          <Button title="Connect to server" onPress={connectToServer} />
        )}
        <Text style={styles.dataText}>Data: {data}</Text>
        <Button title="Request Data" />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: '#ffffff',
    fontSize: 24,
    marginVertical: 50,
  },
  dataText: {
    color: '#ffffff',
    fontSize: 24,
    marginVertical: 50,
  },
});
export default TcpConnect;
