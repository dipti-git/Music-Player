
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class Upload extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ alignContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={styles.choose}>
                            <Text style={{
                                textAlign: 'left',
                                fontSize: 30,
                                fontWeight: "bold",
                                // marginTop: 60,
                                marginLeft: 35,
                                position: "relative"
                            }}>Choose Files to Upload</Text>

                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[styles.buttonstyle, styles.buttonstyleborder]}
                            onPress={() => { alert("Yayy! Your file has been added.") }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 25,
                                    fontWeight: "bold",
                                    marginTop: 5

                                }}
                            > ADD FILES</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

//defining styles
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#abc8de',
        height: 250,
        flexBasis: '48%',
        marginTop: 150,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 8,
        elevation: 8,
    },
    buttonstyle: {
        width: '50%',
        height: 40,
        backgroundColor: '#34556e',
        marginTop: '75%',
        marginLeft: 70,

    },
    buttonstyleborder: {
        borderBottomColor: '#a4b0be',
        borderRadius: 15,
        borderBottomWidth: 3,
        borderRightColor: '#a4b0be',
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderLeftColor: '#a4b0be'
    },

    choose: {
        backgroundColor: '#a4b0be',
        width: '90%',
        height: 40,
        marginTop: '50%',
        position: "absolute",
        paddingTop: 8,
        // alignItem: 'center'
    }
});

export default Upload;
























































// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


// class Upload extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableOpacity
//                     style={styles.choose}>
//                     <Text style={{
//                         textAlign: 'left',
//                         fontSize: 30,
//                         fontWeight: "bold",
//                         // marginTop: 60,
//                         marginLeft: 35,
//                         position: "relative"
//                     }}>Choose Files to Upload</Text>

//                 </TouchableOpacity>
//                 <View>
//                     <TouchableOpacity
//                         style={[styles.buttonstyle, styles.buttonstyleborder]}
//                         onPress={() => { alert("Yayy! Your file has been added.") }}
//                     >
//                         <Text
//                             style={{
//                                 textAlign: 'center',
//                                 fontSize: 25,
//                                 fontWeight: "bold",
//                                 marginTop: 5

//                             }}
//                         > ADD FILES</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>

//         );
//     }
// }

// //defining styles
// const styles = StyleSheet.create({
//     container: {

//         backgroundColor: '#abc8de',
//         height: 250,
//         flexBasis: '48%',
//         marginTop: 150,
//         marginLeft: 50,
//         marginRight: 50,
//         borderRadius: 8,
//         elevation: 8,
//     },
//     buttonstyle: {
//         width: '50%',
//         height: 40,
//         backgroundColor: '#34556e',
//         marginTop: '75%',
//         marginLeft: 70,

//     },
//     buttonstyleborder: {
//         borderBottomColor: '#a4b0be',
//         borderRadius: 15,
//         borderBottomWidth: 3,
//         borderRightColor: '#a4b0be',
//         borderRightWidth: 3,
//         borderLeftWidth: 3,
//         borderLeftColor: '#a4b0be'
//     },

//     choose: {
//         backgroundColor: '#a4b0be',
//         width: '100%',
//         height: 40,
//         marginTop: '50%',
//         position: "absolute"
//     }
// });

// export default Upload;
































