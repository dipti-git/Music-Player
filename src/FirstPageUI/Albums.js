import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import data from './data';
import LinearGradient from 'react-native-linear-gradient';



//creating component
class Albums extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: data
    }

    albums = () => {
        return this.state.data.map(item => {
            return (
                <View key={item.id} style={{ height: 250, margin: 3, flexBasis: '48%' }}>




                    <ImageBackground imageStyle={{ borderRadius: 20 }}

                        source={{ uri: item.image_link }}
                        style={{
                            height: 200,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,


                        }} >



                        <LinearGradient
                            style={{
                                height: 200,
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                flexDirection: 'row',
                                borderRadius: 20

                            }} start={{ x: 0.1, y: 0.6 }} end={{ x: 0, y: 1 }} colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}>

                            <TouchableOpacity
                                // 
                                onPress={() => this.props.navigation.navigate('Player',
                                    { headline: item.headline }
                                )}

                            >

                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    paddingLeft: 15,
                                    color: '#fff',
                                    alignSelf: 'flex-end',
                                    paddingTop: 5,

                                }}
                                >{item.headline}</Text>


                            </TouchableOpacity>
                        </LinearGradient>



                    </ImageBackground>
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.albums()}
            </View>
        );
    }
}

//defining styles
const styles = StyleSheet.create({
    container: {
        height: 800,
        overflow: 'hidden',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'


    },
});

export default Albums;


























// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// import data from './data';
// import LinearGradient from 'react-native-linear-gradient';



// //creating component
// class Albums extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {
//         data: data
//     }

//     albums = () => {
//         return this.state.data.map(item => {
//             return (
//                 <View key={item.id} style={{ height: 250, margin: 3, flexBasis: '48%' }}>




//                     <ImageBackground imageStyle={{ borderRadius: 20 }}

//                         source={{ uri: item.image_link }}
//                         style={{
//                             height: 200,
//                             position: 'absolute',
//                             top: 0,
//                             bottom: 0,
//                             right: 0,
//                             left: 0,


//                         }} >



//                         <LinearGradient
//                             style={{
//                                 height: 200,
//                                 position: 'absolute',
//                                 top: 0,
//                                 bottom: 0,
//                                 right: 0,
//                                 left: 0,
//                                 flexDirection: 'row',
//                                 borderRadius: 20

//                             }} start={{ x: 0.1, y: 0.6 }} end={{ x: 0, y: 1 }} colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}>

//                             <TouchableOpacity
//                                 // 
//                                 onPress={() => this.props.navigation.navigate('Player',
//                                     { headline: item.headline }
//                                 )}

//                             >

//                                 <Text style={{
//                                     fontWeight: 'bold',
//                                     fontSize: 15,
//                                     paddingLeft: 15,
//                                     color: '#fff',
//                                     alignSelf: 'flex-end',
//                                     paddingTop: 5,

//                                 }}
//                                 >{item.headline}</Text>


//                             </TouchableOpacity>
//                         </LinearGradient>



//                     </ImageBackground>
//                 </View>
//             )
//         })
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 {this.albums()}
//             </View>
//         );
//     }
// }

// //defining styles
// const styles = StyleSheet.create({
//     container: {
//         height: 800,
//         overflow: 'hidden',
//         flexWrap: 'wrap',
//         flexDirection: 'row',
//         justifyContent: 'space-between'


//     },
// });

// export default Albums;
