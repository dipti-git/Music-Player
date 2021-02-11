import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import data from './data';


// create a component
export default class MainScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: data,
        refresh: false
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.container}>

                    <TouchableOpacity style={[styles.buttonstyle, styles.buttonstyleborder]}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 3 }}>
                            Charts
                        </Text>
                    </TouchableOpacity>

                    <FlatList style={{ width: "100%" }}
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.rowStyle}>
                                <View style={styles.imageContainer} >
                                    <Image source={{ uri: item.image_link }} style={styles.image} />
                                </View>
                                <View style={styles.rightSideContent}>

                                    <Text style={{ backgroundColor: "#abc8de", width: 90, paddingVertical: 4, textAlign: 'center', borderRadius: 7, marginBottom: 8 }} >{item.type}</Text>

                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Player',
                                            { headline: item.headline }
                                        )}

                                    >
                                        <Text style={styles.headline} >{item.headline}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.avatarAndCaption} >
                                        <Image source={{ uri: item.user_avatar }} style={{ height: 24, width: 24, borderRadius: 12 }} />
                                        <Text style={{ paddingLeft: 10 }} >{item.username}</Text>
                                    </View>
                                </View>
                            </View>
                        )} />
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({


    container: {
        backgroundColor: '#abc8de',
        flex: 1,
        padding: 5,
        borderTopWidth: 5,
        borderTopColor: '#34556e',
        borderLeftColor: '#34556e',
        borderBottomColor: '#34556e',
        borderRightColor: '#34556e',
        borderBottomWidth: 5,
        borderLeftWidth: 8,
        borderRightWidth: 8,


    },


    imageContainer: {
        margin: 3,
        height: 120,
        width: (Dimensions.get('window').width / 3) - 4,


    },
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 10,
    },
    rowStyle: {
        flexDirection: 'row',
        borderRadius: 7,
        backgroundColor: '#dfe4ea',
        padding: 5,
        margin: 5

    },
    rightSideContent: {
        paddingLeft: 10,
        width: (Dimensions.get('window').width / 1.5)
    },
    headline: {
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 4
    },
    avatarAndCaption: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingTop: 15
    },
    buttonstyle: {
        width: '25%',
        height: 35,
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































// import React, { Component } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
// import data from './data';


// // create a component
// export default class MainScreen extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {
//         data: data,
//         refresh: false
//     }

//     render() {
//         return (
//             <ScrollView showsVerticalScrollIndicator={false}>

//                 <View>
//                     <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 10, paddingLeft: 6 }}>
//                         Exclusive
//                 </Text>
//                     <FlatList style={{ width: "100%" }}
//                         data={this.state.data}
//                         keyExtractor={(item, index) => index.toString()}
//                         renderItem={({ item }) => (
//                             <View style={styles.rowStyle}>
//                                 <View style={styles.imageContainer} >
//                                     <Image source={{ uri: item.image_link }} style={styles.image} />
//                                 </View>
//                                 <View style={styles.rightSideContent}>
//                                     <Text style={{ backgroundColor: "#7bed9f", width: 90, paddingVertical: 4, textAlign: 'center', borderRadius: 7 }} >{item.type}</Text>
//                                     <Text style={styles.headline} >{item.headline}</Text>
//                                     <View style={styles.avatarAndCaption} >
//                                         <Image source={{ uri: item.user_avatar }} style={{ height: 24, width: 24, borderRadius: 12 }} />
//                                         <Text style={{ paddingLeft: 10 }} >{item.username}</Text>
//                                     </View>
//                                 </View>
//                             </View>
//                         )} />
//                 </View>
//             </ScrollView >
//         )
//     }
// }

// const styles = StyleSheet.create({

//     imageContainer: {
//         margin: 3,
//         height: 120,
//         width: (Dimensions.get('window').width / 3) - 4,


//     },
//     image: {
//         flex: 1,
//         width: null,
//         alignSelf: 'stretch',
//         borderRadius: 10,
//     },
//     rowStyle: {
//         flexDirection: 'row',
//         borderRadius: 7,
//         backgroundColor: '#dfe4ea',
//         padding: 5,
//         margin: 5

//     },
//     rightSideContent: {
//         paddingLeft: 10,
//         width: (Dimensions.get('window').width / 1.5)
//     },
//     headline: {
//         fontSize: 19,
//         fontWeight: 'bold'
//     },
//     avatarAndCaption: {
//         flexDirection: 'row',
//         alignSelf: 'stretch',
//         paddingTop: 15
//     }
// });



