import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import TcpSocket from 'react-native-tcp-socket';

// import {RootStackParamList} from '../src/App';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';

// type TcpConnectProps = NativeStackScreenProps<RootStackParamList, 'TcpConnect'>;

// const TcpConnect = ({navigation}: TcpConnectProps) => {
const TcpConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState('');
  const [socket, setSocket] = useState<TcpSocket.Socket | null>(null);
  const [serverData, setServerData] = useState('');
  const [recievedfromServer, setRecievedfromServer] = useState('');
  const options = {
    port: 1000,
    host: '192.168.0.133',
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
        const message = data.toString();
        setData(message);
        console.log(message);
      });
    } else {
      console.log('Please Connect to Server');
    }
  };
  const sendData = () => {
    const serverlink = `http://10.200.104.90:1000/get-data`;
    axios
      .post(serverlink, {data})
      .then(recievedfromServer => {
        setRecievedfromServer(recievedfromServer.data);
        console.log(recievedfromServer.data);
      })
      .catch(err => {
        console.log('ERROR', err);
      });
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
    <ScrollView>
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
        <ScrollView style={styles.dataContainer}>
          <Text style={styles.dataText}>Data: {data}</Text>
        </ScrollView>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Data Here..."
          value={serverData}
          onChangeText={text => setServerData(text)}
        />
        <Button title="Send Data" onPress={sendData} />
        <Text style={styles.dataText}>
          Server Response: {recievedfromServer}
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: '#ffffff',
    fontSize: 24,
    marginVertical: 30,
  },
  dataContainer: {
    width: '95%',
  },
  dataText: {
    height: 'auto',
    color: '#ffffff',
    fontSize: 20,
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  textinput: {
    backgroundColor: 'white',
    width: 300,
  },
});
export default TcpConnect;
