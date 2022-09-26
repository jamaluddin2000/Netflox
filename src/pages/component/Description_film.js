import React from 'react'
<<<<<<< HEAD
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'
export const {height, width} = Dimensions.get("window");
=======
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'
import Navbar from './Navbar'
>>>>>>> 57e8a87e5346fe6c382c551d058afa490f5cb01a

function Description_film({navigation, route}) {

    const handleInput = () => {
        navigation.navigate('Home')
    }

    return (
<<<<<<< HEAD
        <ScrollView style={{ backgroundColor: "black" }}>
            <Text style={{ color: "red" }}>
                Logo Netflox dan Icon Pencarian
            </Text>
            <TouchableOpacity onPress={handleInput}>
                <Text style={{ color: "black", fontSize: 30 }}>
                    Klick
                </Text>
            </TouchableOpacity>

            <View>
                <Image
                    source={require('../img/gambar_film.jpeg')}
                    style={{ width: width, height: height/3 }}
                    
                />
            </View>

            <Text style={styles.title}>
                The Lion King
            </Text>

            <View style={{flexDirection: 'row'}}>
                <Text style={{
                    color: "darkgray", 
                    fontSize: 13, 
                    marginLeft: 5, 
                    marginRight: 20}}>
                    2022
                </Text>

                <Text style={{
                    color: "darkgray", 
                    backgroundColor: "white", 
                    marginRight: 40}}>
                    18+
                </Text>

                <Text style={{
                    color: "darkgray"}}>
                    8.5 - View
                </Text>

            </View>

            <Text style={{
                color: "white", fontSize: 13, textAlign: 'center',
                borderWidth: 1, borderColor: "gray", borderRadius: 3,
                marginTop: 10, marginLeft: 5, marginEnd: 280
            }}>
                Genre
            </Text>

            <Text style={{
                color: "white", 
                fontSize: 20, 
                textAlign: 'left', 
                marginTop: 20}}>
                Description Film
            </Text>

            <Text style={{
                color: "white", fontSize: 13, marginVertical: 5,
                textAlign: 'center', paddingHorizontal: 35, paddingVertical: 10, lineHeight: 18,
                borderBottomWidth: 1, borderTopWidth: 1, borderColor: "gray"
            }}>
                Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.
            </Text>


            <Text style={{
                color: "white", 
                fontSize: 20, 
                textAlign: 'left', 
                marginTop: 20}}>
                Story Line
            </Text>

            <Text style={{
                color: "white", fontSize: 13, marginVertical: 5,
                textAlign: 'center', paddingHorizontal: 35, paddingVertical: 10, lineHeight: 18,
                borderBottomWidth: 1, borderTopWidth: 1, borderColor: "gray"
            }}>
                Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.
            </Text>

        </ScrollView>
=======
        <View style={{backgroundColor: "black"}}>
            <View>
                <Navbar navigation={navigation} />
            </View>

            <View>
                <Image style={styles.img} resizeMode={'stretch'} source={{ uri: route.params.image }} />
            </View>

            <Text style={{color: "white", fontSize: 13, textAlign: 'right', marginEnd: 10}}>
                8.5 - View
            </Text>
           
            <Text style={{
                color: "white", fontSize: 13, textAlign: 'center', 
                borderWidth: 1, borderColor: "gray", borderRadius: 3, 
                margin: 5, marginEnd: 280}}>
                Genre
           </Text>

           <Text style={{
                color: "white", fontSize: 13, marginVertical: 5, 
                textAlign: 'center', paddingHorizontal: 35, paddingVertical: 10, lineHeight: 18,  
                borderBottomWidth: 1, borderTopWidth: 1, borderColor: "gray"}}>    
                Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.
           </Text>

        </View>
>>>>>>> 57e8a87e5346fe6c382c551d058afa490f5cb01a
    )
}

const styles = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 50
    },
<<<<<<< HEAD
    title: {
        color: "white", 
        fontSize: 30, 
        textAlign: 'left', 
        margin: 5
    },
    title2: {
=======
    img: {
        width: 100,
        height: 100,
>>>>>>> 57e8a87e5346fe6c382c551d058afa490f5cb01a

    }
})

export default Description_film
