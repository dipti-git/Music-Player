import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
//import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';



export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }


  setDuration(data) {
    // console.log(totalLength);
    this.setState({ totalLength: Math.floor(data.duration) });
  }

  setTime(data) {
    //console.log(data);
    this.setState({ currentPosition: Math.floor(data.currentTime) });
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {
    if (this.state.selectedTrack < this.props.tracks.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    }
  }



  render() {
    var headline = this.props.navigation.getParam('headline', 'noid');
    const track = this.props.tracks[this.state.selectedTrack];
    const video = this.state.isChanging ? null : (
      <Video source={{ uri: track.audioUrl }}
        ref="audioElement"
        paused={this.state.paused}
        resizeMode="cover"
        repeat={true}
        onLoadStart={this.loadStart}
        onLoad={this.setDuration.bind(this)}
        onProgress={this.setTime.bind(this)}
        onEnd={this.onEnd}
        onError={this.videoError}
        style={styles.audioElement} />
    );

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Header message="Playing From Charts" onQueuePress={() => this.props.navigation.navigate('Exclusive')} />
        <AlbumArt url={track.albumArtUrl} />
        <TrackDetails title={track.title} artist={track.artist} />
        <Controls
          onPressRepeat={() => this.setState({ repeatOn: !this.state.repeatOn })}
          repeatOn={this.state.repeatOn}
          shuffleOn={this.state.shuffleOn}
          forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
          onPressShuffle={() => this.setState({ shuffleOn: !this.state.shuffleOn })}
          onPressPlay={() => this.setState({ paused: false })}
          onPressPause={() => this.setState({ paused: true })}
          onBack={this.onBack.bind(this)}
          onForward={this.onForward.bind(this)}
          paused={this.state.paused} />
        {video}
      </View>
    );
  }
}



const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(5,68,94)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};
























// import React, { Component } from 'react';
// import { View, Text, StatusBar } from 'react-native';
// import Header from './Header';
// import AlbumArt from './AlbumArt';
// import TrackDetails from './TrackDetails';
// //import SeekBar from './SeekBar';
// import Controls from './Controls';
// import Video from 'react-native-video';



// export default class Player extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       paused: true,
//       totalLength: 1,
//       currentPosition: 0,
//       selectedTrack: 0,
//       repeatOn: false,
//       shuffleOn: false,
//     };
//   }


//   setDuration(data) {
//     // console.log(totalLength);
//     this.setState({ totalLength: Math.floor(data.duration) });
//   }

//   setTime(data) {
//     //console.log(data);
//     this.setState({ currentPosition: Math.floor(data.currentTime) });
//   }

//   seek(time) {
//     time = Math.round(time);
//     this.refs.audioElement && this.refs.audioElement.seek(time);
//     this.setState({
//       currentPosition: time,
//       paused: false,
//     });
//   }

//   onBack() {
//     if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
//       this.refs.audioElement && this.refs.audioElement.seek(0);
//       this.setState({ isChanging: true });
//       setTimeout(() => this.setState({
//         currentPosition: 0,
//         paused: false,
//         totalLength: 1,
//         isChanging: false,
//         selectedTrack: this.state.selectedTrack - 1,
//       }), 0);
//     } else {
//       this.refs.audioElement.seek(0);
//       this.setState({
//         currentPosition: 0,
//       });
//     }
//   }

//   onForward() {
//     if (this.state.selectedTrack < this.props.tracks.length - 1) {
//       this.refs.audioElement && this.refs.audioElement.seek(0);
//       this.setState({ isChanging: true });
//       setTimeout(() => this.setState({
//         currentPosition: 0,
//         totalLength: 1,
//         paused: false,
//         isChanging: false,
//         selectedTrack: this.state.selectedTrack + 1,
//       }), 0);
//     }
//   }



//   render() {
//     var headline = this.props.navigation.getParam('headline', 'noid');
//     const track = this.props.tracks[this.state.selectedTrack];
//     const video = this.state.isChanging ? null : (
//       <Video source={{ uri: track.audioUrl }}
//         ref="audioElement"
//         paused={this.state.paused}
//         resizeMode="cover"
//         repeat={true}
//         onLoadStart={this.loadStart}
//         onLoad={this.setDuration.bind(this)}
//         onProgress={this.setTime.bind(this)}
//         onEnd={this.onEnd}
//         onError={this.videoError}
//         style={styles.audioElement} />
//     );

//     return (
//       <View style={styles.container}>
//         <StatusBar hidden={true} />
//         <Header message="Playing From Charts" />
//         <AlbumArt url={track.albumArtUrl} />
//         <TrackDetails title={track.title} artist={track.artist} />
//         <Controls
//           onPressRepeat={() => this.setState({ repeatOn: !this.state.repeatOn })}
//           repeatOn={this.state.repeatOn}
//           shuffleOn={this.state.shuffleOn}
//           forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
//           onPressShuffle={() => this.setState({ shuffleOn: !this.state.shuffleOn })}
//           onPressPlay={() => this.setState({ paused: false })}
//           onPressPause={() => this.setState({ paused: true })}
//           onBack={this.onBack.bind(this)}
//           onForward={this.onForward.bind(this)}
//           paused={this.state.paused} />
//         {video}
//       </View>
//     );
//   }
// }



// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(5,68,94)',
//   },
//   audioElement: {
//     height: 0,
//     width: 0,
//   }
// };