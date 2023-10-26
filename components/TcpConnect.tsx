import React, {useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';

import TcpSocket from 'react-native-tcp-socket';

import {RootStackParamList} from '../src/App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type TcpConnectProps = NativeStackScreenProps<RootStackParamList, 'TcpConnect'>;

const TcpConnect = ({navigation}: TcpConnectProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState('');
  const [socket, setSocket] = useState<TcpSocket.Socket | null>(null);
  const options = {
    port: 1000,
    host: '10.200.104.90',
  };
  const connectToServer = () => {
    const newsocket = TcpSocket.createConnection(options, () => {
      console.log('Connected');
      setIsConnected(true);
      setData('');
      setSocket(newsocket);
    });
    newsocket.on('error', error => {
      console.log(`Error ${error}`);
      setIsConnected(false);
      setSocket(null);
    });
  };
  const dataFetch = () => {
    if (socket) {
      const request =
        `GET /send-data HTTP/1.1\r\n` + `host:10.200.104.90\r\n` + `\r\n`;
      socket.write(request);
      console.log('Requesting data');
      socket.on('data', (data: any) => {
        setData(data.toString());
        console.log(data.toString());
      });
    }
  };
  const disconnectToServer = () => {
    if (socket) {
      socket.end();
      setIsConnected(false);
      setSocket(null);
      console.log('Closed connection');
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.statusText}>
          TCP/IP Connection: {isConnected ? 'Connected' : 'Disconnected'}
        </Text>
        {isConnected ? (
          <Button title="DisConnect to server" onPress={disconnectToServer} />
        ) : (
          <Button title="Connect to server" onPress={connectToServer} />
        )}
        <Button title="DataFetch" onPress={dataFetch} />
        <ScrollView>
          <Text style={styles.dataText}>Data: {data}</Text>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: '#ffffff',
    fontSize: 24,
    marginVertical: 30,
  },
  dataText: {
    color: '#ffffff',
    fontSize: 20,
    marginVertical: 30,
  },
});
export default TcpConnect;
