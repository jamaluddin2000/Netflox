<<<<<<< Updated upstream
import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TextInput, Dimensions} from 'react-native'
import Navbar from './Navbar'

export const { height, width } = Dimensions.get("window");
=======
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Navbar from './Navbar';

export const {height, width} = Dimensions.get('window');
>>>>>>> Stashed changes

function Description_film({navigation, route}) {
  const handleInput = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View>
        <Navbar navigation={navigation} />
      </View>

      <Text style={styles.title}>The Lion King</Text>

      <View>
        <Image
          style={styles.img}
          resizeMode={'stretch'}
          source={{uri: route.params.image}}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
              borderWidth: 1,
              borderColor: '#FF9900',
              borderRadius: 3,
              paddingHorizontal: 40,
              marginRight: width / 10,
            }}>
            Genre
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'darkgray',
              fontSize: 13,
              marginLeft: 5,
              marginRight: 20,
            }}>
            2022
          </Text>

          <Text
            style={{
              color: 'darkgray',
              backgroundColor: 'white',
              marginRight: 40,
            }}>
            18+
          </Text>

          <Text
            style={{
              color: 'darkgray',
            }}>
            8.5 - View
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.Title_Bagian}>Description Film</Text>

        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginVertical: 5,
            textAlign: 'center',
            paddingHorizontal: 35,
            marginTop: 20,
            lineHeight: 20,
          }}>
          Doctor Strange teams up with a mysterious teenage girl from his dreams
          who can travel across multiverses, to battle multiple threats,
          including other-universe versions of himself, which threaten to wipe
          out millions across the multiverse. They seek help from Wanda the
          Scarlet Witch, Wong and others.
        </Text>
      </View>

      <View style={{marginVertical: 30}}>
        <Text style={styles.Title_Bagian}>Top Cast</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={styles.Image_Cast}
                source={require('../img/Aktor.png')}
              />
            </View>

            <View>
              <Text style={styles.Nama_Asli}>Nama Asli</Text>
              <Text style={styles.Nama_Pemeran}>Nama Pemeran</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={styles.Image_Cast}
                source={require('../img/Aktor.png')}
              />
            </View>

<<<<<<< Updated upstream
    return (
        <ScrollView style={{backgroundColor: "black"}}>
=======
>>>>>>> Stashed changes
            <View>
              <Text style={styles.Nama_Asli}>Nama Asli</Text>
              <Text style={styles.Nama_Pemeran}>Nama Pemeran</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={styles.Image_Cast}
                source={require('../img/Aktor.png')}
              />
            </View>

            <View>
              <Text style={styles.Nama_Asli}>Nama Asli</Text>
              <Text style={styles.Nama_Pemeran}>Nama Pemeran</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={styles.Image_Cast}
                source={require('../img/Aktor.png')}
              />
            </View>

            <View>
              <Text style={styles.Nama_Asli}>Nama Asli</Text>
              <Text style={styles.Nama_Pemeran}>Nama Pemeran</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{paddingBottom: 150}}>
        <Text style={styles.Title_Bagian}>Story Line</Text>

        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginVertical: 5,
            textAlign: 'center',
            paddingHorizontal: 35,
            marginTop: 20,
            lineHeight: 20,
          }}>
          Doctor Strange teams up with a mysterious teenage girl from his dreams
          who can travel across multiverses, to battle multiple threats,
          including other-universe versions of himself, which threaten to wipe
          out millions across the multiverse. They seek help from Wanda the
          Scarlet Witch, Wong and others.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 50,
  },
  img: {
    width: width,
    height: height / 3,
  },
  title: {
    color: '#FF9900',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: '3%',
    marginTop: 20,
    marginBottom: 10,
  },
  Title_Bagian: {
    color: 'white',
    fontSize: 25,
    paddingHorizontal: '3%',
    borderLeftWidth: 5,
    borderColor: '#FF9900',
    marginTop: 35,
    marginBottom: 5,
    marginLeft: width / 20,
    paddingLeft: width / 20,
  },
  Image_Cast: {
    width: width / 10,
    height: height / 20,
    borderRadius: 50,
    marginRight: 10,
  },
  Nama_Asli: {
    color: 'white',
    fontSize: 20,
  },
  Nama_Pemeran: {
    color: 'white',
    fontSize: 15,
  },
});

export default Description_film;
