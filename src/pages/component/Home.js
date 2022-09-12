import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Item from './Item';


function App(props) {
    const initialState = [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            "images": "https://cdn.pixabay.com/photo/2022/07/31/10/11/swan-7355432_960_720.jpg",

        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
            "images": "https://cdn.pixabay.com/photo/2022/08/18/17/00/dog-7395306_960_720.jpg",

        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
            "images": "https://images.tokopedia.net/img/JFrBQq/2022/4/26/d3b012df-2c24-41a4-9665-b726a0b63103.jpg"
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
            "images": "https://images.tokopedia.net/img/JFrBQq/2022/4/26/d3b012df-2c24-41a4-9665-b726a0b63103.jpg",


        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
            "images": "https://images.tokopedia.net/img/JFrBQq/2022/4/26/d3b012df-2c24-41a4-9665-b726a0b63103.jpg",


        },
        {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "APPle",
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/6/thumbnail.png",
            "images": "https://images.tokopedia.net/img/JFrBQq/2022/4/26/d3b012df-2c24-41a4-9665-b726a0b63103.jpg",


        },
        {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
            "images": "https://images.tokopedia.net/img/JFrBQq/2022/4/26/d3b012df-2c24-41a4-9665-b726a0b63103.jpg",


        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
            "images": "https://images.tokopedia.net/img/JFrBQq/2022/4/26/d3b012df-2c24-41a4-9665-b726a0b63103.jpg",
        },
        {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
            "images": "https://images.tokopedia.net/img/JFrBQq/2022/4/26/d3b012df-2c24-41a4-9665-b726a0b63103.jpg",

        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
            "images": "https://images.tokopedia.net/img/JFrBQq/2022/4/26/d3b012df-2c24-41a4-9665-b726a0b63103.jpg",
        },

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
                renderItem={({ item, index }) => <Item title={item.title} rating={item.rating} img={item.images} stock={item.stock} index={index} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />

            <TouchableOpacity onPress={() => props.navigation.navigate('Description_film')}>
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

export default App
