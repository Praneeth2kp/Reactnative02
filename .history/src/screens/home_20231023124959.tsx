import {StyleSheet, Text, View,ScrollView, TouchableOpacity} from 'react-native';
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
          pariatur ullam, omnis error dolor dolore unde.
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
          pariatur ullam, omnis error dolor dolore unde.
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
          pariatur ullam, omnis error dolor dolore unde.
        </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.Text}
            onPress={() => navigation.navigate('About')}>
            Go to About
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1:{
    padding:20,
    backgroundColor:''
  },
  button: {
    backgroundColor: <div className=""></div>padding: 10,
    borderRadius: 20,
    marginVertical:20
  },
  Text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'justify',
  },
});
