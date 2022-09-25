import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'
export const {height, width} = Dimensions.get("window");

function Description_film(props) {

    const handleInput = () => {
        props.navigation.navigate('Home')
    }

    return (
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
    )
}

const styles = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 50
    },
    title: {
        color: "white", 
        fontSize: 30, 
        textAlign: 'left', 
        margin: 5
    },
    title2: {

    }
})

export default Description_film
