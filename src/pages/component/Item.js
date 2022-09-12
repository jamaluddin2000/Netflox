import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    na
} from 'react-native'

function Item(props) {

    const handleInput = (id) => {
        if(props.index === true){
            // props.navigation.navigate('Description_film')
            console.log("masuk")
        }else{
            null
        }
    }
    return (
        <View>
            <View style={styles.slidefilm}>
                <TouchableOpacity onPress={handleInput}>
                    <Image style={styles.img} resizeMode={'stretch'} source={{ uri: props.img }} />
                    <Text style={{ color: "white", textAlign: "center" }}>{props.title}</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 10 }}>{props.rating}</Text>
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
