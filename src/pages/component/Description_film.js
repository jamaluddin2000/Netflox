import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

function Description_film(props) {

    const handleInput = () => {
        props.navigation.navigate('Home')
    }

    return (
        <View>
            <Text styles={styles.text}>
                Jamal
            </Text>

            <TouchableOpacity onPress={handleInput}>
                <Text style={{color: "black", fontSize: 30}}>
                    Klick
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 50
    }
})

export default Description_film
