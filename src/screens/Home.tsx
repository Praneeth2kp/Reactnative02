import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <ScrollView>
      <View style={styles.box1}>
        <Text style={styles.Text}>
          This is the home screen. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Vero odit magni atque recusandae, eum, esse quam
          cupiditate, obcaecati voluptas accusantium eveniet dolores voluptatum
          doloribus amet! Maiores minus odit at magni? Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Aut totam ratione, velit amet
          itaque assumenda, quo voluptate est cupiditate minima porro ipsam
          voluptatum aperiam repellat reiciendis recusandae adipisci eius nisi.
          Iste, distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Maxime eum beatae magnam similique, necessitatibus est
          voluptates odit consequatur nam dolores? Suscipit quae debitis
          pariatur ullam, omnis error dolor dolore unde. This is the home
          screen. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          odit magni atque recusandae, eum, esse quam cupiditate, obcaecati
          voluptas accusantium eveniet dolores voluptatum doloribus amet!
          Maiores minus odit at magni? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aut totam ratione, velit amet itaque assumenda, quo
          voluptate est cupiditate minima porro ipsam voluptatum aperiam
          repellat reiciendis recusandae adipisci eius nisi. Iste, distinctio.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eum
          beatae magnam similique, necessitatibus est voluptates odit
          consequatur nam dolores? Suscipit quae debitis pariatur ullam, omnis
          error dolor dolore unde. This is the home screen. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Vero odit magni atque
          recusandae, eum, esse quam cupiditate, obcaecati voluptas accusantium
          eveniet dolores voluptatum doloribus amet! Maiores minus odit at
          magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
          totam ratione, velit amet itaque assumenda, quo voluptate est
          cupiditate minima porro ipsam voluptatum aperiam repellat reiciendis
          recusandae adipisci eius nisi. Iste, distinctio. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Maxime eum beatae magnam
          similique, necessitatibus est voluptates odit consequatur nam dolores?
          Suscipit quae debitis pariatur ullam, omnis error dolor dolore unde.
          This is the home screen. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Vero odit magni atque recusandae, eum, esse quam
          cupiditate, obcaecati voluptas accusantium eveniet dolores
        </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TcpConnect')}>
          <Text style={[styles.Text, {fontSize: 22}, {textAlign: 'center'}]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  box1: {
    padding: 20,
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: '#41c42f',
    padding: 10,
    borderRadius: 25,
    margin: 20,
    width: 50,
    right: 10,
    bottom: 30,
  },
  Text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
