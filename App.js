import React from 'react';
import { View, Text, Button, Dimensions, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FirstPageUIScreen from './src/FirstPageUI';
import PlayerScreen from './src/PlayerFolder';
import UploadScreen from './src/Upload';
import ExclusiveScreen from './src/FirstPageUI/Exclusive';


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: FirstPageUIScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ activeTintColor }) => (
        <Image style={{ height: 30, width: 30 }}
          source={require('./src/img/Home.png')} />
      )
    }
  },

  Exclusive: {
    screen: ExclusiveScreen,
    navigationOptions: {
      tabBarLabel: 'Chart',
      tabBarIcon: ({ activeTintColor }) => (
        <Image style={{ height: 30, width: 30 }}
          source={require('./src/img/Chart.png')} />
      )
    }
  }

},
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: '#abc8de',
      style: { backgroundColor: '#34556e' }
    },


  }
);
const Stack = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  Player: {
    screen: PlayerScreen
  },
  Upload: {
    screen: UploadScreen
  },
  Exclusive: {
    screen: ExclusiveScreen

  }
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false
    }
  },

);
const AppContainer = createAppContainer(Stack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}




































// import React from 'react';
// import { View, Text, Button, Dimensions, Image } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import FirstPageUIScreen from './src/FirstPageUI';
// import PlayerScreen from './src/PlayerFolder';
// import UploadScreen from './src/Upload';
// import ExclusiveScreen from './src/FirstPageUI/Exclusive';


// const TabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: FirstPageUIScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ activeTintColor }) => (
//         <Image style={{ height: 20, width: 20 }}
//           source={require('./src/img/Home.png')} />
//       )
//     }
//   },

//   Exclusive: {
//     screen: ExclusiveScreen,
//     navigationOptions: {
//       tabBarOptions: 'Chart',
//       tabBarIcon: ({ inactiveTintColor }) => (
//         <Image style={{ height: 20, width: 20 }}
//           source={require('./src/img/Chart.png')} />
//       )
//     }
//   }

// },
//   {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       activeTintColor: "#000",
//       inactiveTintColor: '#000',
//       style: { backgroundColor: '#fff' }
//     },


//   }
// );
// const Stack = createStackNavigator({
//   Home: {
//     screen: TabNavigator,
//   },
//   Player: {
//     screen: PlayerScreen
//   },
//   Upload: {
//     screen: UploadScreen
//   },
//   Exclusive: {
//     screen: ExclusiveScreen

//   }
// },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerShown: false
//     }
//   },

// );
// const AppContainer = createAppContainer(Stack);
// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }















