import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import Item from './Item';


function Home({navigation}) {
    const initialState = [
        {   
            "id" : 1,
            "Title": "The Lion King",
            "Year": "2019",
            "Runtime": "118 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
            },
            {
            "id" : 2,
            "Title": "Mowgli: Legend of the Jungle",
            "Year": "2018",
            "Runtime": "104 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
            },
            {
            "id" : 3,
            "Title": "Doctor Strange",
            "Year": "2016",
            "Runtime": "115 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
            },
            {
            
            "id" : 4,
            "Title": "John Wick",
            "Year": "2014",
            "Runtime": "101 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
            },
            {
            
            "id" : 5,
            "Title": "The Notebook",
            "Year": "2004",
            "Runtime": "123 min"
            }

    ]

    const [listData, setListData] = useState(initialState)
    const [img, setImg] = useState()

    return (
        <ScrollView style={{ backgroundColor: "black" }}>
            <View style={styles.header}>
                <Text style={styles.logo}>NETFLOX</Text>
                <Text style={{ color: "white" }}>Pencaharian</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image
                        source={require('../img/ghost.jpg')}
                        style={styles.img} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 30, color: "white", fontWeight: "bold", marginLeft: 10 }}>Ghost Writer</Text>
                <Text style={{ fontSize: 12, color: "white", fontWeight: "400", marginLeft: 10 }}>Pencari hantu yang handal</Text>
            </View>

            <Text style={{ color: "white", fontSize: 30, paddingVertical: 20, paddingHorizontal: 10 }}>POPULAR</Text>
            <FlatList
                data={listData}
                renderItem={({ item, index }) => 
                <Item 
                title ={item.Title}
                tahun = {item.Year}
                durasi = {item.Runtime}
                image = {item.Poster}
                navigation={navigation} 
                />}

                keyExtractor={(item) => item.id}
                horizontal={true}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Description_film')}>
                <Text style={{color: "white", fontSize: 50}}>
                    Klick
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: 'center',
        paddingVertical: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 20,
        backgroundColor: "black"

    },
    img: {
        width: 400,
        height: 400
    },
    logo: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold"
    },

})

export default Home
