//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import data from './data';
import Heading from './Heading';
import Artists from './Artists';
import Featured from './Featured';
import Albums from './Albums';

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
          <View>
            <Heading navigation={this.props.navigation} />
            <Featured navigation={this.props.navigation} />
            <Artists navigation={this.props.navigation} />
          </View>

          <View style={{ paddingBottom: 5, }}>
            <TouchableOpacity
              style={[styles.buttonstyle, styles.buttonstyleborder]}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>

                Top Picks
</Text>

            </TouchableOpacity>

          </View>

          <Albums navigation={this.props.navigation} />


        </View>
      </ScrollView>

    );
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

    // flexWrap:"wrap"
  },
  rightSideContent: {
    paddingLeft: 10,
    width: (Dimensions.get('window').width / 1.5)
  },
  headline: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  avatarAndCaption: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 15
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


















// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
// import data from './data';
// import Heading from './Heading';
// import Artists from './Artists';
// import Featured from './Featured';
// import Albums from './Albums';

// // create a component
// export default class MainScreen extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     data: data,
//     refresh: false
//   }


//   render() {
//     return (
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.container}>
//           <View>
//             <Heading navigation={this.props.navigation} />
//             <Featured navigation={this.props.navigation} />
//             <Artists navigation={this.props.navigation} />
//           </View>

//           <View style={{ paddingBottom: 5, }}>
//             <TouchableOpacity
//               style={[styles.buttonstyle, styles.buttonstyleborder]}
//             >
//               <Text style={{ fontSize: 18, fontWeight: 'bold' }}>

//                 Top Picks
// </Text>

//             </TouchableOpacity>

//           </View>

//           <Albums navigation={this.props.navigation} />


//         </View>
//       </ScrollView>

//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#abc8de',
//     flex: 1,
//     padding: 5,
//     borderTopWidth: 5,
//     borderTopColor: '#34556e',
//     borderLeftColor: '#34556e',
//     borderBottomColor: '#34556e',
//     borderRightColor: '#34556e',
//     borderBottomWidth: 5,
//     borderLeftWidth: 8,
//     borderRightWidth: 8,


//   },

//   imageContainer: {
//     margin: 3,
//     height: 120,
//     width: (Dimensions.get('window').width / 3) - 4,



//   },
//   image: {
//     flex: 1,
//     width: null,
//     alignSelf: 'stretch',
//     borderRadius: 10,
//   },
//   rowStyle: {
//     flexDirection: 'row',
//     borderRadius: 7,
//     backgroundColor: '#dfe4ea',
//     padding: 5,
//     margin: 5

//     // flexWrap:"wrap"
//   },
//   rightSideContent: {
//     paddingLeft: 10,
//     width: (Dimensions.get('window').width / 1.5)
//   },
//   headline: {
//     fontSize: 19,
//     fontWeight: 'bold'
//   },
//   avatarAndCaption: {
//     flexDirection: 'row',
//     alignSelf: 'stretch',
//     paddingTop: 15
//   },
//   buttonstyle: {
//     width: '25%',
//     height: 20,
//     backgroundColor: '#34556e',
//     alignItems: 'center'

//   },
//   buttonstyleborder: {
//     borderBottomColor: '#34556e',
//     borderRadius: 15,
//     borderBottomWidth: 3,
//     borderRightColor: '#34556e',
//     borderRightWidth: 3,
//     borderLeftWidth: 3,
//     borderLeftColor: '#34556e'
//   },
// });































































































