
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import data from './data';


//creating component
class Artists extends Component {

    state = {
        data: data
    }

    artists = () => {
        return this.state.data.map(item => {
            return (
                <View key={item.id} style={{ alignItems: 'center', padding: 5 }}>
                    <Image source={{ uri: item.user_avatar }} style={{ height: 50, width: 50, borderRadius: 25, marginHorizontal: 20, }} />
                    <Text>{item.username}</Text>
                </View>

            )

        })
    }


    render() {

        return (
            <View>
                <View >

                    <TouchableOpacity style={[styles.buttonstyle, styles.buttonstyleborder]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Artists
                  </Text>

                    </TouchableOpacity>

                </View>

                <View style={styles.container}>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {this.artists()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

//defining styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a4b0be',
        marginVertical: 8,
        borderRadius: 8,
        paddingVertical: 5,


    },
    buttonstyle: {
        width: '25%',
        height: 20,
        backgroundColor: '#5e8bad',
        alignItems: 'center',
        marginTop: 0.5,
        paddingTop: 0

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

export default Artists;




























// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import data from './data';


// //creating component
// class Artists extends Component {

//     state = {
//         data: data
//     }

//     artists = () => {
//         return this.state.data.map(item => {
//             return (
//                 <View key={item.id} style={{ alignItems: 'center', padding: 5 }}>
//                     <Image source={{ uri: item.user_avatar }} style={{ height: 50, width: 50, borderRadius: 25, marginHorizontal: 20, }} />
//                     <Text>{item.username}</Text>
//                 </View>

//             )

//         })
//     }


//     render() {

//         return (
//             <View>
//                 <View>
//                     <Text style={{
//                         fontSize: 22,
//                         paddingTop: 15,
//                         fontWeight: 'bold',
//                     }}>Artists</Text>
//                 </View>

//                 <View style={styles.container}>

//                     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                         {this.artists()}
//                     </ScrollView>
//                 </View>
//             </View>
//         );
//     }
// }

// //defining styles
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#a4b0be',
//         marginVertical: 8,
//         borderRadius: 8,
//         paddingVertical: 5,


//     },
// });

// export default Artists;
