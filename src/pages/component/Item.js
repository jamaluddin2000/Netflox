import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

function Item({title, tahun, durasi, image, navigation}) {

    const handleInput = () => {

        navigation.navigate('Halaman1', {
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
        width: 100,
        height: 100,

    },
    slidefilm: {
        addingHorizontal: 20,
        width: 100,
        marginHorizontal: 10
    }

})

export default Item
