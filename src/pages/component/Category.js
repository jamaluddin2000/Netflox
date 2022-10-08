import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native'

import Navbar from './Navbar'

const {height, width} = Dimensions.get("window");


function Category({ navigation, route }) {

    return (
        <ScrollView style={{backgroundColor: "black", flex: 1}} >
            <View>
                <Navbar />
            </View>


            <View>
                <AntDesigner name='FastBackwardOutlined' style={{color: "white", fontSize: 30}} />
            </View>

            <TouchableOpacity style={styles.list_kategori}>
                <Text style={styles.text} >
                    Action
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.list_kategori}>
                <Text style={styles.text}  >
                    Drama
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.list_kategori}>
                <Text style={styles.text}  >
                    Comedy
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.list_kategori}>
                <Text style={styles.text}  >
                    Thiler
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.list_kategori}>
                <Text style={styles.text} >
                    Biografy
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.list_kategori}>
                <Text style={styles.text} >
                    Action
                </Text>
            </TouchableOpacity>





           {/* <Header />
            <Text style={{ color: "black", fontSize: 30 }}>
                ini adalah = {route.params.title}
            </Text>

            <Text style={{ color: "black", fontSize: 30 }}>
                ini adalah = {route.params.tahun}
            </Text>

            <Text style={{ color: "black", fontSize: 30 }}>
                ini adalah = {route.params.durasi}
            </Text>
            <View>
                <Image style={styles.img} resizeMode={'stretch'} source={{ uri: route.params.image }} />
            </View> */}



            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: "red", fontSize: 50 }}>
                    Click mamank
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,

    },
    list_kategori : {
        borderColor: "#FF9900",
        borderWidth: 1,
        alignItems: "center",
        marginHorizontal: 40, 
        marginVertical: 15, 
        padding: 30, 
    },
    text : {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
    }

})


export default Category
