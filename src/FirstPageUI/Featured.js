import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Touchable
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';




//creating component
class Featured extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 8 }}>
                    <TouchableOpacity style={[styles.buttonstyle, styles.buttonstyleborder]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Featured
                        </Text>
                    </TouchableOpacity>
                </View>


                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={{ marginBottom: 0 }}>
                        <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.imagecontainer} source={{ uri: 'https://assets-cdn.ekantipur.com/images/third-party/entertainment/Nepathya-Frontman-Amrit-Gur-08032017093040-1000x0.jpg' }} >
                            <LinearGradient
                                start={{ x: 0.1, y: 0.6 }} end={{ x: 0.1, y: 1 }}
                                locations={[0, 9]}
                                colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}
                                style={styles.lgstyle} >
                                <Text style={styles.featuredtext} >
                                    नेपथ्य - अमृत गुरुङ
                    </Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>

                    <View>
                        <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.imagecontainer} source={{ uri: 'https://picsum.photos/id/1027/200/300' }} >
                            <LinearGradient
                                start={{ x: 0.1, y: 0.6 }} end={{ x: 0.1, y: 1 }}
                                locations={[0, 9]}
                                colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}
                                style={styles.lgstyle} >
                                <Text style={styles.featuredtext} >
                                    भोली - समृद्धी राइ
                    </Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>

                    <View>
                        <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.imagecontainer} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/thumb-10.jpg?alt=media&token=9c9a3f0a-fb7c-4588-b5e3-412554f0a6b4' }} >
                            <LinearGradient
                                start={{ x: 0.1, y: 0.6 }} end={{ x: 0.1, y: 1 }}
                                locations={[0, 9]}
                                colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}
                                style={styles.lgstyle} >
                                <Text style={styles.featuredtext} >
                                    प्रमोद खरेल - पोखरामा
                    </Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>


                </Swiper>

            </View >
        );
    }
}

// import React, { Component } from 'react'
// import { AppRegistry, StyleSheet, Text, View } from 'react-native'



//defining styles
const styles = StyleSheet.create({
    container: {
        marginTop: 10,


    },
    imagecontainer: {
        height: 250,

    },
    textcontainer: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',

    },
    wrapper: {
        height: 270
    },

    featuredtext: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#fff',
        alignSelf: 'flex-end',
        paddingBottom: 10,
        paddingLeft: 95,
    },
    lgstyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 2,
        bottom: 0,
        flexDirection: 'row',
        borderRadius: 10,
    },
    buttonstyle: {
        width: '25%',
        height: 20,
        backgroundColor: '#5e8bad',
        alignItems: 'center'

    },
    buttonstyleborder: {
        borderBottomColor: '#34556e',
        borderRadius: 15,
        borderBottomWidth: 3,
        borderRightColor: '#34556e',
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderLeftColor: '#34556e'
    },

});

export default Featured;


























// import React, { Component } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     ImageBackground,
//     TouchableOpacity,
//     Touchable
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';



// //creating component
// class Featured extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableOpacity
//                     onPress={() => this.props.navigation.navigate('Player')}
//                 >

//                     <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.imagecontainer} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/thumb-10.jpg?alt=media&token=9c9a3f0a-fb7c-4588-b5e3-412554f0a6b4' }} >
//                         <LinearGradient
//                             start={{ x: 0.1, y: 0.6 }} end={{ x: 0.1, y: 1 }}
//                             locations={[0, 9]}
//                             colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}
//                             style={{ position: 'absolute', top: 0, left: 0, right: 2, bottom: 0, flexDirection: 'row', borderRadius: 10, }} >
//                             <Text style={{
//                                 fontWeight: 'bold',
//                                 fontSize: 22,
//                                 color: '#fff',
//                                 alignSelf: 'flex-end',
//                                 paddingBottom: 10,
//                                 paddingLeft: 95,
//                             }} >
//                                 प्रमोद खरेल - पोखरामा
//                     </Text>
//                         </LinearGradient>
//                     </ImageBackground>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// //defining styles
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 10,


//     },
//     imagecontainer: {
//         height: 250,

//     },
//     textcontainer: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#000',

//     },


// });

// export default Featured;

