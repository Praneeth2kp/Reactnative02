import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import UsbConnect from '../components/UsbConnect';
import TcpConnect from '../components/TcpConnect';
// export type RootStackParamList = {
//   Home: undefined;
//   About: undefined;
//   UsbConnect: undefined;
//   TcpConnect: undefined;
// };
// const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="TcpConnect">
  //       <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="About" component={About} />
  //       <Stack.Screen name="UsbConnect" component={UsbConnect} />
  //       <Stack.Screen name="TcpConnect" component={TcpConnect} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  return (
    <SafeAreaView>
      {/* <TcpConnect /> */}
      <UsbConnect />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
