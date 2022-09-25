import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'


import Navbar from './Navbar'

function Description_film({navigation, route}) {

    const handleInput = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={{backgroundColor: "black"}}>
            <Text style={{color: "red"}}>
                Logo Netflox dan Icon Pencarian
            </Text>
            <TouchableOpacity onPress={handleInput}>
                <Text style={{color: "black", fontSize: 30}}>
                    Klick
                </Text>
            </TouchableOpacity>
        
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={require('../img/gambar_film.jpeg')}
                    style={{width: 415, height: 250}}
                    resizeMode="contain"
                />
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
    )
}

const styles = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 50
    },
    img: {
        width: 100,
        height: 100,

    }
})

export default Description_film
