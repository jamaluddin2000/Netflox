import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

// import {width, height} from "./Home"
const {height, width} = Dimensions.get("window");


function Item({title, tahun, durasi, image, navigation}) {

    const handleInput = () => {

        navigation.navigate('Description_film', {
                title: title,
                tahun : tahun,
                durasi : durasi,
                image : image,
        })

    }
    return (
        <View>
            <View style={styles.slidefilm}>
                <TouchableOpacity onPress={handleInput}>
                    <Image style={styles.img} resizeMode={'stretch'} source={{ uri: image }} />
                    <Text style={{ color: "white", textAlign: "center" }}>{title}</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 10 }}>{durasi}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: width/4,
        height:  height/5,

    },
    slidefilm: {
        // addingHorizontal: 20,
        width: width/4,
        marginHorizontal: width/50
    }

})

export default Item
