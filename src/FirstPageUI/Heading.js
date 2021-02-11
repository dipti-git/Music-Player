import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';



//creating component
class Heading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '75%' }}>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 30,
                        fontWeight: "bold",
                        marginVertical: 10,
                        marginLeft: 25,

                    }}>Songs </Text>
                </View>
                <View style={{ width: '20%', justifyContent: 'center' }}>
                    <Button title="Upload"
                        // onPress={() => { alert("Hello") }}
                        onPress={() => this.props.navigation.navigate('Upload')}
                    />
                </View>
            </View>
        );
    }
}

//defining styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34556e',
        borderRadius: 8,
        elevation: 8,
        flexDirection: 'row'
    },
    button: {
        justifyContent: 'flex-end'
    }
});

export default Heading;































// import React, { Component } from 'react';
// import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';



// //creating component
// class Heading extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={{ width: '75%' }}>
//                     <Text style={{
//                         textAlign: 'left',
//                         fontSize: 30,
//                         fontWeight: "bold",
//                         marginVertical: 10,
//                         marginLeft: 25,

//                     }}>Songs </Text>
//                 </View>
//                 <View style={{ width: '20%', justifyContent: 'center' }}>
//                     <Button title="Upload"
//                         // onPress={() => { alert("Hello") }}
//                         onPress={() => this.props.navigation.navigate('Upload')}
//                     />
//                 </View>
//             </View>
//         );
//     }
// }

// //defining styles
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#34556e',
//         borderRadius: 8,
//         elevation: 8,
//         flexDirection: 'row'
//     },
//     button: {
//         justifyContent: 'flex-end'
//     }
// });

// export default Heading;

















